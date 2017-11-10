import React, { Component } from "react";
import _ from "underscore";
import $ from "jquery";
import _get from "lodash.get";
import autobind from "autobind-decorator";
import videos from "../data/videos";

export default class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            registeredFullScreenListeners: false,
            currentChapter: 0
        };
    }

    render() {
        const { metaId, playerId, currentVideo, currentVideo: { chapters } } = this.props;
        const currentChapter = chapters ? chapters[ this.state.currentChapter ] : null;
        const title = !chapters && currentVideo.title;
        const subText = this.createSubText(currentChapter);

        return (
            <main className="player">
                <div className="player--video-container">
                    <img className="loading" src="/src/images/Eclipse.svg" />
                    <video
                        id={`player--video${currentVideo.id}`}
                        className="player--video"
                        loop={true}
                        autoPlay={true}
                        onMouseOver={this.toggleControls}
                        onMouseLeave={this.toggleControls}
                        onClick={this.togglePlay}
                        src={currentVideo.src}>
                    </video>
                </div>
                <div className="player__data">
                    <div className="player__controls">
                        <span className="player__controls--control player__controls--play" onClick={this.play}>PLAY</span>
                        <span className="pipe">|</span>
                        <span className="player__controls--control player__controls--pause" onClick={this.pause}>PAUSE</span>
                        <span className="pipe">|</span>
                        <span className="player__controls--control player__controls--sound" onClick={this.toggleSound}>TOGGLE SOUND</span>
                        <span className="pipe">|</span>
                        <span className="player__controls--control player__controls--theater" onClick={this.showFullScreen}>THEATER MODE</span>
                    </div>
                    <footer className="player__footer">
                        <div className="player__footer__meta">
                            {metaId}
                            <h5>You are now watching : {currentChapter ? currentChapter.title : currentVideo.title}</h5>
                        </div>
                        {subText}
                    </footer>
                </div>
            </main>
        );
    }

    componentDidMount() {
        const { fetchMeta, fetchVideo, params } = this.props;
        const videoId = _get(params, "id", videos[ 2 ].id);
        const video = this.getHTMLVideo();

        fetchVideo(videoId);
        this.hideElement(video);
        video.addEventListener("loadeddata", this.videoIsReady.bind(this, video));
        video.addEventListener("error", this.videoError.bind(this, video));
    }

    componentWillReceiveProps(nextProps) {
        const { currentVideo } = this.props;

        if (currentVideo.id !== nextProps.currentVideo.id) {
            this.registerChapters(nextProps.currentVideo);
        }
    }

    registerChapters(video) {
        const { chapters } = video;
        const htmlVideo = this.getHTMLVideo();

        htmlVideo.addEventListener("timeupdate", () => {
            const currentTime = parseInt(htmlVideo.currentTime, 10);

            _.each(chapters, (chapter, index) => {
                const prevChapter = chapters[ index - 1 ];
                const startTime = prevChapter ? prevChapter.endTime : 0;
                const endTime = chapter.endTime;
                const currentChapterRange = currentTime > startTime && currentTime <= endTime;

                if (currentChapterRange) {
                    this.setState({ currentChapter: index });
                }
            });
        });
    }

    /*
     * This method determines if there are any links in the text (with http or https at the start)
     * and renders anchor tags for those links
     */
    createSubText(currentChapter) {
        let text = currentChapter && currentChapter.text;
        let indexes = [];
        let elements = [];

        // find the indexes of the links
        if (text) {
            const re = /http/g;
            let match;

            while ((match = re.exec(text)) !== null) {
                indexes.push(match.index);
            }
        }

        // separate the text into distinct elements
        if (indexes.length) {
            elements.push(text.slice(0, indexes[ 0 ]));

            indexes.forEach((index, i) => {
                const endOfLinkIndex = text.indexOf(" ", index);
                const link = text.slice(index, endOfLinkIndex);
                const lastIndex = i === indexes.length - 1;

                elements.push(link);

                if (!lastIndex) {
                    elements.push(text.slice(endOfLinkIndex, indexes[ i + 1 ]));
                } else {
                    elements.push(text.slice(endOfLinkIndex, text.length));
                }

            });
        }

        return (
            <div className="player__footer__subconcious-text">
                {elements.length ? elements.map((element, i) => {
                    const isLink = element.match(/http/);

                    if (isLink) {
                        return <a key={i} href={element} target="_blank">{element}</a>;
                    } else {
                        return <span key={i}>{element}</span>;
                    }
                }) : text}
            </div>
        );
    }

    hideElement(element) {
        element.style.display = "none";
    }

    videoIsReady(video) {
        const loading = document.querySelector(".loading");
        const videoLoaded = video.readyState > 1;

        if (videoLoaded) {
            const data = document.querySelector(".player__data");

            this.hideElement(loading);

            video.style.display = "inline-block";
            data.style.display = "block";
        }
    }

    videoError(video) {
        const loading = document.querySelector(".loading");
        const container = document.querySelector(".player--video-container");
        const error = document.createElement("h5");
        error.className = "player--video-error";
        error.innerText = "There was an error loading the video";

        this.hideElement(loading);
        container.appendChild(error);
    }

    getHTMLVideo() {
        const { currentVideo } = this.props;
        const video = document.querySelector(`#player--video${currentVideo.id}`);
        return video;
    }

    @autobind
    togglePlay() {
        const video = this.getHTMLVideo();
        const paused = video.paused;

        if (paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    play() {
        const video = this.getHTMLVideo();

        if (video) {
            video.play();
        }
    }

    pause() {
        const video = this.getHTMLVideo();

        if (video) {
            video.pause();
        }
    }

    @autobind
    toggleSound() {
        const video = this.getHTMLVideo();

        if (video) {
            video.muted = !video.muted;
        }
    }

    @autobind
    showFullScreen() {
        const video = this.getHTMLVideo();

        if (video) {

            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            }

            if (!this.state.registeredFullScreenListeners) {
                video.addEventListener("fullscreenchange", this.toggleFullScreenClass.bind(this), false);
                video.addEventListener("MSFullscreenChange", this.toggleFullScreenClass.bind(this), false);
                video.addEventListener("mozfullscreenchange", this.toggleFullScreenClass.bind(this), false);
                video.addEventListener("webkitfullscreenchange", this.toggleFullScreenClass.bind(this), false);
                this.setState({ registeredFullScreenListeners: true });
            }

        }
    }

    toggleFullScreenClass() {
        const video = this.getHTMLVideo();
        const classList = video.classList;
        const isFullScreen = classList.contains("fullscreen");

        if (isFullScreen) {
            classList.remove("fullscreen");
        } else {
            classList.add("fullscreen");
        }
    }

    @autobind
    toggleControls() {
        const video = this.getHTMLVideo();
        const currentVideoControls = video && video.getAttribute("controls");

        if (video) {
            video.setAttribute("controls", !currentVideoControls);
        }
    }
};

Player.defaultProps = {
    currentVideo: {}
};

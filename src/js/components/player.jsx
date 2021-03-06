import React, { Component } from "react";
import _ from "underscore";
import _get from "lodash.get";
import autobind from "autobind-decorator";
import Typist from "react-typist";
import videos from "../data/videos";
import { createTimer } from "../pureFunctions/time";
const homeVideoIndex = 0;

export default class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            registeredFullScreenListeners: false,
            currentChapter: 0,
            showTyping: false,
            currentTime: 0
        };
    }

    render() {
        const { metaId, currentVideo, currentVideo: { chapters }, location } = this.props;
        const { currentTime } = this.state;
        const currentChapter = chapters ? chapters[ this.state.currentChapter ] : null;
        const subText = this.createSubText(currentChapter);
        const title = currentChapter ? currentChapter.title : currentVideo.title;
        const avgTypingDelay = this.getAvgTypingDelay();
        const { hours, minutes, seconds, milliseconds } = createTimer(currentTime);
        const firstChapter = this.state.currentChapter === 0;
        const startDelay = firstChapter ? 2000 : 0;

        return (
            <main ref="player" className="player">
                <div className="player--video-container">
                    <img className="loading" src="/src/images/Eclipse.svg" alt="" />
                    <video
                        id={`player--video${currentVideo.id}`}
                        className="player--video"
                        loop={true}
                        autoPlay={true}
                        muted={true}
                        playsInline={true}
                        controlsList="nodownload"
                        controls={true}
                        onMouseOver={this.togglePlay}
                        src={currentVideo.src}>
                    </video>
                    <h6>Watermark</h6>
                </div>
                <div className="player__data">
                    <footer className="player__footer">
                        <div className="player__footer__meta">
                            {metaId}
                            <h3 className="player__footer__meta--title">{title}</h3>
                            <h3 className="timer">
                                {hours === "00" ? "" : hours + ":"}{minutes}:{seconds}:{milliseconds}
                            </h3>
                        </div>
                        <div className="player__footer--text">
                            <img className="logo" src="/src/images/logos-02.png" alt="" />
                            {this.state.showTyping &&
                                <Typist
                                    key={this.state.currentChapter}
                                    avgTypingDelay={avgTypingDelay}
                                    startDelay={startDelay}>
                                    {subText}
                                </Typist>
                            }
                        </div>
                    </footer>
                </div>
            </main>
        );
    }

    componentDidMount() {
        const { fetchVideo, params, currentVideo } = this.props;
        const videoId = _get(params, "id", videos[ homeVideoIndex ].id);
        const video = this.getHTMLVideo();
        const currentVideoExists = _.keys(currentVideo).length;
        const textAvailable = currentVideoExists && _get(currentVideo, "chapters.length", 0);

        if (textAvailable) {
            this.setState({ showTyping: true });
        }

        if (currentVideoExists) {
            this.registerChapters(currentVideo);
        }

        fetchVideo(videoId);
        this.hideElement(video);
        video.addEventListener("loadeddata", this.videoIsReady.bind(this, video));
        video.addEventListener("error", this.videoError.bind(this, video));
        video.addEventListener("play", this.startTracking.bind(this, video));
        video.addEventListener("pause", this.stopTracking.bind(this, video));
        document.addEventListener("click", () => video.muted = false);
    }

    componentWillReceiveProps(nextProps) {
        const { currentVideo } = this.props;
        const textAvailable = _get(nextProps, "currentVideo.chapters.length", 0);

        if (!this.props.home && nextProps.home) {
            // reset to home page
            return this.reset();
        }

        if (currentVideo.id !== nextProps.currentVideo.id) {
            this.registerChapters(nextProps.currentVideo);
            this.setState({ currentVideo: nextProps.currentVideo });
        }

        if (textAvailable) {
            this.setState({ showTyping: true });
        }
    }

    componentWillUnmount() {
        this.removeEventListeners();
    }

    removeEventListeners() {
        const { currentVideo } = this.props;
        const htmlVideo = this.getHTMLVideo();

        htmlVideo.removeEventListener("timeupdate", this.timeUpdate.bind(this, htmlVideo, currentVideo));
        htmlVideo.removeEventListener("loadeddata", this.videoIsReady.bind(this, htmlVideo));
        htmlVideo.removeEventListener("error", this.videoError.bind(this, htmlVideo));
        htmlVideo.removeEventListener("play", this.startTracking.bind(this, htmlVideo));
        htmlVideo.removeEventListener("pause", this.stopTracking.bind(this, htmlVideo));
        this.stopTracking();
    }

    reset() {
        const homeVideoId = videos[ homeVideoIndex ].id;

        this.removeEventListeners();
        this.setState({ showTyping: false });
        this.props.fetchVideo(homeVideoId)
    }

    startTracking(video) {
        this.timer = setInterval(() => this.setState({ currentTime: video.currentTime }), 50);
    }

    stopTracking() {
        clearInterval(this.timer);
    }

    registerChapters(video) {
        const htmlVideo = this.getHTMLVideo();
        htmlVideo.addEventListener("timeupdate", this.timeUpdate.bind(this, htmlVideo, video));
    }

    timeUpdate(htmlVideo, video) {
        const { chapters } = video;
        const currentTime = parseInt(htmlVideo.currentTime, 10);

        if (this.refs.player) {
            this.setState({ currentTime });

            _.each(chapters, (chapter, index) => {
                const prevChapter = chapters[ index - 1 ];
                const startTime = prevChapter ? prevChapter.endTime : 0;
                const endTime = chapter.endTime;
                const currentChapterRange = currentTime > startTime && currentTime <= endTime;

                if (currentChapterRange) {
                    this.setState({ currentChapter: index });
                }
            });
        }
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
            const thing = text.slice(0, indexes[ 0 ]);
            elements.push(thing);

            indexes.forEach((index, i) => {
                const lastIndex = i === indexes.length - 1;
                const endOfLinkIndex = text.indexOf(" ", index);
                const lastPhrase = endOfLinkIndex === -1;
                let link;

                if (lastPhrase) {
                    link = text.slice(index);
                } else {
                    link = text.slice(index, endOfLinkIndex);
                }

                elements.push(link);

                if (!lastIndex) {
                    elements.push(text.slice(endOfLinkIndex, indexes[ i + 1 ]));
                } else if (!lastPhrase) {
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

    getAvgTypingDelay() {
        const { currentVideo } = this.props;
        const { currentChapter } = this.state;
        const currentEndTime = _get(currentVideo, [ "chapters", currentChapter, "endTime" ]);
        const nextEndTime = _get(currentVideo, [ "chapters", currentChapter + 1, "endTime" ], 0);
        const timeToNext = nextEndTime - currentEndTime;
        const charactersInText = _get(currentVideo, [ "chapters", currentChapter, "text", "length" ]);
        const timeToType = Math.min(Math.abs((timeToNext / charactersInText)) * 300, 100);

        return timeToType;
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

    videoError() {
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

        if (paused && video.currentTime < 3) {
            this.play();
            video.muted = false;
        }
    }

    @autobind
    play() {
        const video = this.getHTMLVideo();

        if (video) {
            return video.play();
        }
    }

    @autobind
    pause() {
        const video = this.getHTMLVideo();

        if (video) {
            video.pause();
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
}

Player.defaultProps = {
    currentVideo: {}
};

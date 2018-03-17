import React, { Component } from "react";
import _ from "underscore";
import $ from "jquery";
import _get from "lodash.get";
import autobind from "autobind-decorator";
import Typist from "react-typist";
import videos from "../data/videos";

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
        const { metaId, playerId, currentVideo, currentVideo: { chapters } } = this.props;
        const { currentTime } = this.state;
        const currentChapter = chapters ? chapters[ this.state.currentChapter ] : null;
        const subText = this.createSubText(currentChapter);
        const title = currentChapter ? currentChapter.title : currentVideo.title;
        const avgTypingDelay = this.getAvgTypingDelay();
        const millisecondsNum = parseInt((currentTime % 1) * 1000, 10);
        const milliseconds = ("00" + millisecondsNum).slice(-3);
        const seconds = parseInt(currentTime % 60, 10);
        const minutes = parseInt((currentTime / 60) % 60, 10);
        const hours = parseInt((currentTime / (60 * 60)) % 24);

        return (
            <main className="player">
                <div className="player--video-container">
                    <img className="loading" src="/src/images/Eclipse.svg" />
                    <video
                        id={`player--video${currentVideo.id}`}
                        className="player--video"
                        loop={true}
                        autoPlay={true}
                        controlsList="nodownload"
                        onMouseOver={this.toggleControls}
                        onMouseLeave={this.toggleControls}
                        onClick={this.togglePlay}
                        src={currentVideo.src}>
                    </video>
                </div>
                <div className="player__data">
                    <footer className="player__footer">
                        <div className="player__footer__meta">
                            {metaId}
                            <h3 className="player__footer__meta--title">{title} :</h3>
                            <h3 className="timer">
                                {hours ? hours + ":" : ""}{minutes}:{seconds}:{milliseconds}
                            </h3>
                        </div>
                        <div className="player__footer--text">
                            <img className="logo" src="/src/images/logos-02.png" />
                            {this.state.showTyping &&
                                <Typist
                                    key={this.state.currentChapter}
                                    avgTypingDelay={avgTypingDelay}>
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
        const { fetchMeta, fetchVideo, params } = this.props;
        const videoId = _get(params, "id", videos[ 2 ].id);
        const video = this.getHTMLVideo();

        fetchVideo(videoId);
        this.hideElement(video);
        video.addEventListener("loadeddata", this.videoIsReady.bind(this, video));
        video.addEventListener("error", this.videoError.bind(this, video));
        video.addEventListener("play", this.startTracking.bind(this, video));
        video.addEventListener("pause", this.stopTracking.bind(this, video));
    }

    startTracking(video) {
        this.timer = setInterval(() => this.setState({ currentTime: video.currentTime }), 50);
    }

    stopTracking() {
        clearInterval(this.timer);
    };

    componentWillReceiveProps(nextProps) {
        const { currentVideo } = this.props;
        const textAvailable = _get(nextProps, "currentVideo.chapters.length", 0);

        if (currentVideo.id !== nextProps.currentVideo.id) {
            this.registerChapters(nextProps.currentVideo);
            this.setState({ currentVideo: nextProps.currentVideo });
        }

        if (textAvailable) {
            this.setState({ showTyping: true });
        }
    }

    registerChapters(video) {
        const { chapters } = video;
        const htmlVideo = this.getHTMLVideo();

        htmlVideo.addEventListener("timeupdate", () => {
            const currentTime = parseInt(htmlVideo.currentTime, 10);
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
        const lastChapter = currentChapter === _get(currentVideo, "chapters.length");
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

    @autobind
    play() {
        const video = this.getHTMLVideo();

        if (video) {
            video.play();
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
};

Player.defaultProps = {
    currentVideo: {}
};

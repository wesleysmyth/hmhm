import React, { Component } from "react";
import { Link } from "react-router";
import _ from "underscore";
import $ from "jquery";
import _get from "lodash.get";
import autobind from "autobind-decorator";
import videoPlayer from "../videoPlayer";
import videos from "../data/videos";

@autobind
export default class Player extends Component {

    constructor(props) {
        super(props);
        this.state = { registeredFullScreenListeners: false };
    }

    render() {
        const { metaId, playerId, currentVideo } = this.props;
        const subconciousText = currentVideo && currentVideo.subconciousText;

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
                            <h5>You are now watching : {currentVideo.title}</h5>
                        </div>
                        <div className="player__footer__subconcious-text">
                            {subconciousText && subconciousText.map((line, index) => <span key={index} className="player__footer__subconcious-text--line">{line}</span>)}
                        </div>
                    </footer>
                </div>
            </main>
        );
    }

    componentDidMount() {
        const { fetchMeta, fetchVideo, params } = this.props;
        const videoId = _get(params, "id", 0);
        const video = this.getVideo();

        fetchVideo(videoId);
        this.hideElement(video);
        video.addEventListener("loadeddata", this.videoIsReady.bind(this, video));
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

    getVideo() {
        const { currentVideo } = this.props;
        const video = document.querySelector(`#player--video${currentVideo.id}`);
        return video;
    }

    togglePlay() {
        const video = this.getVideo();
        const paused = video.paused;

        if (paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    play() {
        const video = this.getVideo();

        if (video) {
            video.play();
        }
    }

    pause() {
        const video = this.getVideo();

        if (video) {
            video.pause();
        }
    }

    toggleSound() {
        const video = this.getVideo();

        if (video) {
            video.muted = !video.muted;
        }
    }

    showFullScreen() {
        const video = this.getVideo();

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
        const video = this.getVideo();
        const classList = video.classList;
        const isFullScreen = classList.contains("fullscreen");

        if (isFullScreen) {
            classList.remove("fullscreen");
        } else {
            classList.add("fullscreen");
        }
    }

    toggleControls() {
        const video = this.getVideo();
        const currentVideoControls = video && video.getAttribute("controls");

        if (video) {
            video.setAttribute("controls", !currentVideoControls);
        }
    }
};

Player.defaultProps = {
    currentVideo: {}
};

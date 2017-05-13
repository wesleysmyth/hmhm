import React, { Component } from "react";
import _ from "underscore";
import autobind from "autobind-decorator";
import videoPlayer from "../videoPlayer";
import videoLibrary from "../data/videoLibrary";

@autobind
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { registeredFullScreenListeners: false };
    }

    render() {
        const { metaId, playerId, currentVideo } = this.props;

        return (
            <div className="home">
                <header className="home__header">
                    <h2 className="home__title">HALFMANHALFMACHINE</h2>
                    <div className="home__menu">
                        <h4 className="home__menu--title">Menu</h4>
                    </div>
                </header>
                <main className="home__player">
                    <div className="home__player--inline">
                        <div className="home__controls">
                            <p className="home__controls--control home__controls--play" onClick={this.play}>PLAY</p>
                            <span className="pipe">|</span>
                            <p className="home__controls--control home__controls--pause" onClick={this.pause}>PAUSE</p>
                            <span className="pipe">|</span>
                            <p className="home__controls--control home__controls--sound" onClick={this.toggleSound}>TOGGLE SOUND</p>
                            <span className="pipe">|</span>
                            <p className="home__controls--control home__controls--theater" onClick={this.showFullScreen}>THEATER MODE</p>
                        </div>
                        <div className="home__player--video-container">
                            <video
                                id={`home__player--video${currentVideo.id}`}
                                className="home__player--video"
                                loop={true}
                                autoPlay={true}
                                onMouseOver={this.toggleControls}
                                onMouseLeave={this.toggleControls}
                                onClick={this.togglePlay}
                                src={currentVideo.src}>
                            </video>
                        </div>
                    </div>
                    <footer className="home__footer">
                        <div className="home__footer--meta">
                            {metaId}
                            <h5>You are now watching : {currentVideo.title}</h5>
                        </div>
                        <div className="home__footer--stream"></div>
                    </footer>
                </main>
            </div>
        );
    }

    componentDidMount() {
        const { fetchMeta, fetchVideo } = this.props;
        fetchVideo(videoLibrary[2]);
    }

    getVideo() {
        const { currentVideo } = this.props;
        const video = document.querySelector(`#home__player--video${currentVideo.id}`);
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

Home.defaultProps = {
    currentVideo: {}
};

module.exports = Home;

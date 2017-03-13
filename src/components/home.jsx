import React, { Component } from "react";
import _ from "underscore";
import autobind from "autobind-decorator";
import videoPlayer from "../videoPlayer";
import videoLibrary from "../data/videoLibrary";

@autobind
class Home extends Component {

    render() {
        const { metaId, playerId, currentVideo } = this.props;

        return (
            <div className="home">
                <header className="home__header">
                    <h2 className="home__title">HALFMANHALFMACHINE</h2>
                    <section className="home__menu">
                        <h4 className="home__menu--title">Menu</h4>
                    </section>
                </header>
                <div className="home__controls">
                    <p className="home__controls--control home__controls--theater">THEATER MODE</p>
                    <span className="pipe">|</span>
                    <p className="home__controls--control home__controls--sound">TURN OFF SOUND</p>
                    <span className="pipe">|</span>
                    <p className="home__controls--control home__controls--pause" onClick={this.pause}>PAUSE</p>
                    <span className="pipe">|</span>
                    <p className="home__controls--control home__controls--play" onClick={this.play}>PLAY</p>
                </div>
                <main className="home__player">
                    <video id={`home__player--video${currentVideo.id}`} className="home__player--video" onMouseOver={this.onHover} src={currentVideo.src}></video>
                    <footer className="home__footer">
                        <div className="home__footer--meta">
                            {metaId}
                        </div>
                        <div className="home__footer--stream"></div>
                    </footer>
                </main>
            </div>
        );
    }

    componentDidMount() {
        const { fetchMeta, fetchVideo } = this.props;
        fetchVideo(videoLibrary[0]);
    }

    componentDidUpdate(nextProps) {
        const { currentVideo, currentVideoPlayer, setCurrentVideoPlayer } = this.props;
        const video = document.querySelector(`#home__player--video${currentVideo.id}`);
        const nextPropsVideoExists = _.keys(nextProps.currentVideo).length;
        const updatedVideo = nextPropsVideoExists && currentVideo.id !== nextProps.currentVideo.id;

        if (!_.keys(currentVideoPlayer).length || updatedVideo) {
            const player = videoPlayer(video.id);
            setCurrentVideoPlayer(player);
        }
    }

    play() {
        const { currentVideoPlayer } = this.props;
        if (currentVideoPlayer) {
            currentVideoPlayer.play();
        }
    }

    pause() {
        const { currentVideoPlayer } = this.props;
        if (currentVideoPlayer) {
            currentVideoPlayer.pause();
        }
    }

    onHover() {
        const { currentVideo } = this.props;
        const video = document.querySelector(`#home__player--video${currentVideo.id}_html5_api`);

        if (video) {
            video.setAttribute("controls", true);
        }
    }
};

Home.defaultProps = {
    currentVideo: {}
};

module.exports = Home;

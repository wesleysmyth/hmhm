import React, { Component } from "react";

class Home extends Component {

    // <a href="#/programming">Go to the programming page</a>

    render() {
        const { metaId, playerId, videoSrc } = this.props;

        console.log("metaId", metaId)
        console.log("playerId", playerId)
        console.log("videoSrc", videoSrc)
        return (
            <div className="home">
                <h2 className="home__title">HALFMANHALFMACHINE</h2>
                <section className="home__menu">
                    <h4 className="home__menu--title">Menu</h4>
                </section>
                <aside className="control--play">PLAY</aside>
                <aside className="control--pause">PAUSE</aside>
                <aside className="control--sound">TURN OFF SOUND</aside>
                <aside className="control--theater">THEATER MODE</aside>
                <main className="home__player">
                    <video id="home__player--video" src={videoSrc}>
                    </video>
                </main>
                <footer className="home__footer">
                    <div className="home__footer--meta">
                        {metaId}
                    </div>
                    <div className="home__footer--stream"></div>
                </footer>
            </div>
        );
    }

    componentDidMount() {
        const { fetchMeta, fetchVideo } = this.props;
        fetchVideo("https://player.vimeo.com/external/87899059.hd.mp4?s=8bebb1223baebfcffcdd63ef7e6452dcb7a1afc1&profile_id=119");
    }
};

module.exports = Home;

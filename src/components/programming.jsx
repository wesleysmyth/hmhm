import React, { Component } from "react";
const videojs = require("video.js");

class Programming extends Component {

    render() {
        // const { program } = this.props;
        return (
            <div>
                <h1>This is the programming page</h1>
                <video id="really-cool-video" src="https://player.vimeo.com/external/87899059.hd.mp4?s=8bebb1223baebfcffcdd63ef7e6452dcb7a1afc1&profile_id=119"></video>
            </div>
        );
    }

    componentDidMount() {
        // const { addPlayer } = this.props;
        // addPlayer("really-cool-video");
    }

};

module.exports = Programming;
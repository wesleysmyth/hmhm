import React, { Component } from "react";
import { browserHistory } from "react-router";
import videos from "../data/videos";

export default class VideoLibrary extends Component {

    render() {
        return (
            <div className="video-library">
                <h1>This is the video library page</h1>
                {this.renderVideos()}
            </div>
        );
    }

    renderVideos() {
        return (
            <div className="video-library__videos">
                {videos.map((video, index) => {
                    const { imgSrc, imgAlt, title, id } = video;

                    return (
                        <div className="video-library__videos--video" key={index}>
                            <img className="video-library__videos--video-img" src={imgSrc} alt={imgAlt} onClick={this.showVideo.bind(this, id)} />
                            <h4 className="video-library__videos--video-title">{title}</h4>
                        </div>
                    );
                })}
            </div>
        );
    }

    showVideo(id) {
        browserHistory.push(`/videos/${id}`);
    }

};

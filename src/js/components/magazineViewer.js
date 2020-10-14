import React, { Component } from "react";
import { browserHistory } from "react-router";
import ImageGallery from 'react-image-gallery';
import _ from "underscore";
import magazines from "../data/magazines";

export default class MagazineViewer extends Component {

    render() {
        const { magazine: { title, pages }, params: { id } } = this.props;
        const items = pages.map((page, i) => {
            page.thumbnailLabel = (`00${i}`).slice(-3);
            return page;
        });

        return (
            <div className="magazine-viewer" style={{
                height: window.innerHeight * .85
            }}>
                <h3 className="magazine-viewer__title">{title}</h3>
                <ImageGallery
                    showPlayButton={false}
                    onThumbnailClick={this.hideThumbnails}
                    items={items} />
                <div className="thumbnail-wrapper" onClick={this.showThumbnails}>
                    <div className="thumbnail" onClick={this.showThumbnails}></div>
                    <div className="thumbnail" onClick={this.showThumbnails}></div>
                    <div className="thumbnail" onClick={this.showThumbnails}></div>
                    <div className="thumbnail" onClick={this.showThumbnails}></div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.body.addEventListener("click", () => {
            this.hideThumbnails();
        });

        document.body.addEventListener("keydown", e => {
            if (e.keyCode === 27) {
                this.hideThumbnails();
            }
        });
    }

    showThumbnails() {
        const thumbnails = document.querySelector(".image-gallery-thumbnails-wrapper");
        thumbnails.style.display = "flex";
    }

    hideThumbnails() {
        const thumbnails = document.querySelector(".image-gallery-thumbnails-wrapper");
        thumbnails.style.display = "none";
    }
}

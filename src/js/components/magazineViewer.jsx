import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

export default class MagazineViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
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

    render() {
        const { magazine: { title, pages }, params: { id } } = this.props;
        const { loading } = this.state;
        const items = pages.map((page, i) => {
            page.thumbnailLabel = (`00${i}`).slice(-3);
            return page;
        });

        return (
            <div id={id} className="magazine-viewer" style={{
                height: window.innerHeight * .85
            }}>
                <h3 className="magazine-viewer__title">{title}</h3>
                {loading && <img id={`loading ${id}`} className="loading" src="/src/images/Eclipse.svg" />}
                <ImageGallery
                    showPlayButton={false}
                    onThumbnailClick={this.hideThumbnails}
                    items={items}
                    onImageLoad={() => this.setState({ loading: false })}
                />
                <div className="thumbnail-wrapper" onClick={this.showThumbnails}>
                    <div className="thumbnail" onClick={this.showThumbnails}></div>
                    <div className="thumbnail" onClick={this.showThumbnails}></div>
                    <div className="thumbnail" onClick={this.showThumbnails}></div>
                    <div className="thumbnail" onClick={this.showThumbnails}></div>
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.loading && !this.state.loading) {
            const gallery = document.querySelector(".image-gallery");
            const thumbnailWrapper = document.querySelector(".thumbnail-wrapper");

            gallery.style.visibility = "inherit";
            thumbnailWrapper.style.visibility = "inherit";
        }
    }

    showThumbnails() {
        const thumbnails = document.querySelector(".image-gallery-thumbnails-wrapper");
        if (thumbnails) {
            thumbnails.style.display = "flex";
        }
    }

    hideThumbnails() {
        const thumbnails = document.querySelector(".image-gallery-thumbnails-wrapper");
        if (thumbnails) {
            thumbnails.style.display = "none";
        }
    }
}

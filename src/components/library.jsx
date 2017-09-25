import React, { Component } from "react";
import { browserHistory } from "react-router";
import md5 from "md5";

export default class Library extends Component {

    render() {
        const { type } = this.props;

        return (
            <div className={`${type}-library`}>
                <h1>This is the {type} library page</h1>
                {this.renderLibraryItems()}
            </div>
        );
    }

    componentDidMount() {
        const { type } = this.props;
        const imgs = document.querySelectorAll(`.${type}-library__${type}s--${type}-img`);

        imgs.forEach(img => {
            img.style.display = "none";
            this.checkImgLoad(img);
        });
    }

    checkImgLoad(img) {
        const imgLoaded = img.complete && img.naturalWidth !== 0;

        if (imgLoaded) {
            const loader = document.getElementById(`loading ${img.id}`);
            img.style.display = "block";

            if (loader) {
                loader.style.display = "none";
            }
        } else {
            setTimeout(this.checkImgLoad.bind(this, img), 200);
        }
    }

    renderLibraryItems() {
        const { type, items } = this.props;

        return (
            <div className={`${type}-library__${type}s`}>
                {items.map((item, index) => {
                    const { imgSrc, imgAlt, title, id } = item;
                    const uniqueId = id + index;

                    return (
                        <div className={`${type}-library__${type}s--${type}`} key={index}>
                            <img id={`loading ${uniqueId}`} className="loading" src="/src/images/Eclipse.svg" />
                            <img id={uniqueId} className={`${type}-library__${type}s--${type}-img`} src={imgSrc} alt={imgAlt} onClick={this.showVideo.bind(this, id)} />
                            <h4 className={`${type}-library__${type}s--${type}-title`} onClick={this.showVideo.bind(this, id)}>{title}</h4>
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

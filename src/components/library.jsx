import React, { Component } from "react";
import { browserHistory } from "react-router";
import FlipPage from "react-flip-page";
import { createTimer } from "../pureFunctions/time";

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

        this.addPageListener();
    }

    addPageListener() {
        document.body.addEventListener("keydown", e => {
            const { keyCode } = e;
            const right = keyCode === 39;
            const left = keyCode === 37;

            if (left) {
                this.flipPage.gotoPreviousPage();
            } else if (right) {
                this.flipPage.gotoNextPage();
            }
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
                {type === "print" &&
                <FlipPage ref={component => this.flipPage = component}
                    orientation="horizontal"
                    flipOnTouch
                    width={((window.innerWidth * .80) / 2)}>
                    <img src="http://derekanthonywelte.com/i.php?/000/821/derekanthonywelte-scottsdaleghosts-4a,xlarge.2x.1517871688.jpg" />
                    <img src="http://derekanthonywelte.com/i.php?/000/822/derekanthonywelte-scottsdaleghosts-5a,xlarge.2x.1517871688.jpg" />
                    <img src="http://derekanthonywelte.com/i.php?/000/823/derekanthonywelte-scottsdaleghosts-6,xlarge.2x.1517871688.jpg" />
                </FlipPage>}
                {items.map((item, index) => {
                    const { imgSrc, imgAlt, title, id, time } = item;
                    const uniqueId = id + index;
                    const itemClass = `${type}-library__${type}s--${type}`;
                    const { hours, minutes, seconds } = createTimer(time);

                    return (
                        <div className={itemClass} key={index}>
                            <img id={`loading ${uniqueId}`} className="loading" src="/src/images/Eclipse.svg" />
                            <img id={uniqueId} className={`${itemClass}-img`} src={imgSrc} alt={imgAlt} onClick={this.showVideo.bind(this, id)} />
                            <div className={`${itemClass}-data`}>
                                <h5 className={`${itemClass}-title`} onClick={this.showVideo.bind(this, id)}>{title}</h5>
                                <div className={`${itemClass}-right`}>
                                    <h5 className={`${itemClass}-play`} onClick={this.showVideo.bind(this, id)}>PLAY</h5>
                                    <span className={`${itemClass}-time`}>{hours === "00" ? "" : hours + ":"}{minutes}:{seconds}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    showVideo(id) {
        browserHistory.push(`/film-library/${id}`);
    }

}

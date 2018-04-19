import React, { Component } from "react";
import { browserHistory } from "react-router";
import FlipPage from "react-flip-page";
import _ from "underscore";
import { createTimer } from "../pureFunctions/time";

export default class Library extends Component {

    render() {
        const { type, items, filterTags, currentTag } = this.props;
        const tags = _.uniq(items.reduce((prev, next) => {
            if (next.tags) {
                return prev.concat(next.tags);
            }
        }, [])).sort((a, b) => a > b);

        tags.unshift("all");

        return (
            <div className={`${type}-library`}>
                <div className={`${type}-library__header`}>
                    <h6 className={`${type}-library__filter`}>// Filter //</h6>
                    <div className={`${type}-library__tags`}>
                        {tags.map((tag, i) => {
                            const isCurrentTag = currentTag === tag ? "current" : "";

                            return (
                                <span
                                    key={i}
                                    onClick={filterTags.bind(null, tag)}
                                    className={`${type}-library__tags--tag ${isCurrentTag}`}>
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                    <h6 className={`${type}-library__title`}>Film Library</h6>
                </div>
                <hr />
                {this.renderLibraryItems()}
            </div>
        );
    }

    componentDidMount() {
        this.checkImages(this.props);
        this.addPageListener();
    }

    componentDidUpdate(prevProps) {
        const { items } = this.props;

        if (items.length !== prevProps.items.length) {
            this.checkImages(prevProps);
        }
    }

    addPageListener() {
        if (this.props.type === "print") {
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
    }

    checkImages({ type }) {
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
                    const { imgSrc, imgAlt, title, id, time, summary } = item;
                    const uniqueId = id + index;
                    const itemClass = `${type}-library__${type}s--${type}`;
                    const { hours, minutes, seconds } = createTimer(time);

                    return (
                        <div className={itemClass} key={index}>
                            <img id={`loading ${uniqueId}`} className="loading" src="/src/images/Eclipse.svg" />
                            <img id={uniqueId} className={`${itemClass}-img`} src={imgSrc} alt={imgAlt} onClick={this.showVideo.bind(this, id)} />
                            <div className={`${itemClass}-data`}>
                                <h5 className={`${itemClass}-title`} onClick={this.showVideo.bind(this, id)}>{title}</h5>
                                <div className={`${itemClass}--right`}>
                                    <h5 className={`${itemClass}--play`} onClick={this.showVideo.bind(this, id)}>PLAY</h5>
                                    <span className={`${itemClass}--time`}>{hours === "00" ? "" : hours + ":"}{minutes}:{seconds}</span>
                                </div>
                            </div>
                            <hr />
                            <div className={`${itemClass}__summary-container`}>
                                <img className="logo" src="/src/images/logos-02.png" />
                                <p className={`${itemClass}--summary`}>{summary}</p>
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

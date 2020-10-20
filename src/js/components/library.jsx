import React, { Component } from "react";
import { browserHistory } from "react-router";
import _ from "underscore";
import { createTimer } from "../pureFunctions/time";
import videos from "../data/videos";
import magazines from "../data/magazines";

export default class Library extends Component {

    render() {
        const { type, filterTags, currentTag } = this.props;
        const libraryType = type === "video" ? "Film" : "Magazine";
        const data = type === "video" ? videos : magazines;
        const tags = _.uniq(data.reduce((prev, next) => {
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
                    <h6 className={`${type}-library__title`}>{`${libraryType} Library`}</h6>
                </div>
                <hr />
                {this.renderLibraryItems()}
            </div>
        );
    }

    componentDidMount() {
        this.checkImages(this.props);
    }

    componentDidUpdate(prevProps) {
        const { items } = this.props;

        if (items.length !== prevProps.items.length) {
            this.showLoaders(this.props);
            this.checkImages(this.props);
        }
    }

    componentWillUnmount() {
        this.props.filterTags("all");
    }

    showLoaders({ type }) {
        const imgs = document.querySelectorAll(`.${type}-library__${type}s--${type}-img`);

        imgs.forEach(img => {
            const loader = document.getElementById(`loading ${img.id}`);
            loader.style.display = "block";
        });
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
                {items.map((item, index) => {
                    const { imgSrc, imgAlt, title, id, time, summary } = item;
                    const uniqueId = id + index;
                    const itemClass = `${type}-library__${type}s--${type}`;
                    const actionText = type === "video" ? "PLAY" : "READ";
                    const { hours, minutes, seconds } = createTimer(time);

                    return (
                        <div className={itemClass} key={index}>
                            <img id={`loading ${uniqueId}`} className="loading" src="/src/images/Eclipse.svg" />
                            <img id={uniqueId} className={`${itemClass}-img`} src={imgSrc} alt={imgAlt} onClick={this.showItem.bind(this, id)} />
                            <div className={`${itemClass}-data`}>
                                <h5 className={`${itemClass}-title`} onClick={this.showItem.bind(this, id)}>{title}</h5>
                                <div className={`${itemClass}--right`}>
                                    <h5 className={`${itemClass}--play`} onClick={this.showItem.bind(this, id)}>{actionText}</h5>
                                    {type === "video" &&
                                        <span className={`${itemClass}--time`}>{hours === "00" ? "" : hours + ":"}{minutes}:{seconds}</span>
                                    }
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

    showItem(id) {
        const prefix = this.props.type === "video" ? "film" : "magazine";
        browserHistory.push(`/${global.productionPath}/${prefix}-library/${id}`);
    }

}

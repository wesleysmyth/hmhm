import React, { Component } from "react";
import { browserHistory } from "react-router";
import FlipPage from "react-flip-page";
import _ from "underscore";
import magazines from "../data/magazines";

export default class MagazineViewer extends Component {

    render() {
        const { magazine: { title, pages }, params: { id } } = this.props;

        return (
            <div className="magazine-viewer" style={{
                height: window.innerHeight * .85
            }}>
                <h3 className="magazine-viewer__title">{title}</h3>
                <FlipPage
                    ref={component => this.flipPage = component}
                    orientation="horizontal"
                    flipOnTouch
                    loopForever
                    responsive
                    /* 'uncutPages' can be included to override height restriction for images */
                    width={((window.innerWidth * .80))}
                    pageBackground="#000">
                    {pages.map((page, i) => <img src={page.src} key={i} />)}
                </FlipPage>
            </div>
        );
    }

    componentDidMount() {
        this.addPageListeners();
    }

    addPageListeners() {
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

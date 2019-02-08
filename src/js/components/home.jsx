import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import $ from "jquery";
import _get from "lodash.get";
import _ from "underscore";
import autobind from "autobind-decorator";

export default class Home extends Component {

    render() {
        const { children, menuOpen } = this.props;
        const type = _get(children, "type.WrappedComponent.name", "");
        const isPlayer = type === "Player";
        const dropdownClass = isPlayer ? "player" : "";
        const footerRoutes = {
            HALFMANHALFMACHINE: "/",
            CONTACT: "/contact",
            ABOUT: "/about",
            "C. 2019-2020": null,
            "OBJECTS IN THE MIRROR": null,
            S001: null,
            "VER.001": null,
        };

        return (
            <div className="home">
                <header className="home__header">
                    <h3 className="home__title" onClick={this.goHome}>HALFMANHALFMACHINE</h3>
                    <img className="home__header--logo" src="/src/images/hmhm-logo-TOP-large.png" onClick={this.goHome} />
                    <img onClick={this.toggleMenu} className="menu--button" src="/src/images/hmhm-menu-button-transp.png" />
                </header>
                {menuOpen &&
                    <aside className={`menu__dropdown ${dropdownClass}`}>
                        <img className="logo" src="/src/images/logos-03.png" />
                        <hr />
                        <Link className="menu--option" to="/">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">Channel 001</span>
                        </Link>
                        <Link className="menu--option" to="/films">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">Film Library</span>
                        </Link>
                        <Link className="menu--option" to="/magazines">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">Magazines</span>
                        </Link>
                        <Link className="menu--option" to="/about">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">About</span>
                        </Link>
                        <Link className="menu--option" to="/contact">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">Contact</span>
                        </Link>
                    </aside>
                }
                <div className="home__wrapper">
                    {children}
                </div>
                <footer className="footer">
                    <div className="footer-wrapper">
                        {_.map(footerRoutes, (route, text, obj) => {
                            const bar = text === "VER.001" ? "" : "|";
                            const onClick = route ? () => browserHistory.push(`${route}`) : () => {};
                            const className = route ? "footer-text route" : "footer-text";

                            return <span className={className} key={text} onClick={onClick}> {text} {bar}</span>
                        })}
                    </div>
                </footer>
            </div>
        );
    }

    goHome() {
        browserHistory.push(`/`);
    }

    @autobind
    toggleMenu() {
        this.props.toggleMenu();
    }
}

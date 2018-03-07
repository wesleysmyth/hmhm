import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import $ from "jquery";
import _get from "lodash.get";
import autobind from "autobind-decorator";

export default class Home extends Component {

    render() {
        const { children, menuOpen } = this.props;
        const type = _get(children, "type.WrappedComponent.name", "");
        const isPlayer = type === "Player";
        const dropdownClass = isPlayer ? "player" : "";

        return (
            <div className="home">
                <header className="home__header">
                    <h2 className="home__title" onClick={this.goHome}>HALFMANHALFMACHINE</h2>
                    <div className="menu" onClick={this.toggleMenu}>
                        <h4 className="menu--title">// MENU //</h4>
                    </div>
                </header>
                {menuOpen &&
                    <aside className={`menu__dropdown ${dropdownClass}`}>
                        <img className="logo" src="/src/images/logos-03.png" />
                        <hr />
                        <Link className="menu--option" to="/">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">Channel 001</span>
                        </Link>
                        <Link className="menu--option" to="/film-library">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">Film Library</span>
                        </Link>
                        <Link className="menu--option" to="/magazines">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">Magazines</span>
                        </Link>
                        <Link className="menu--option" to="/information">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">Information</span>
                        </Link>
                        <Link className="menu--option" to="/contact">
                            <span className="asterisk">*</span>
                            <span className="menu--option-title">Contact</span>
                        </Link>
                    </aside>
                }
                {children}
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

    registerMenuToggle() {
        const $menu = $(".menu")
        const $dropdown = $(".menu__dropdown");

        // // show the dropdown menu on hover
        // $menu.hover(() => {
        //     this.setState({ menuOpen: true });
        // }, ({ relatedTarget }) => {
        //     const targetIsDropdown = relatedTarget && (relatedTarget.className === "menu--option" || relatedTarget.className.match(/menu__dropdown/) || relatedTarget.className.match(/player/));

        //     if (!targetIsDropdown) {
        //         this.setState({ menuOpen: false });
        //     }
        // });

        // hide the menu on dropdown leave
        // $dropdown.hover(() => {}, ({ relatedTarget }) => {
        //     if (relatedTarget && relatedTarget.className !== "menu") {
        //         this.setState({ menuOpen: false });
        //     }
        // });
    }
}

import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import $ from "jquery";
import _get from "lodash.get";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
    }

    render() {
        const { children } = this.props;
        const type = _get(children, "type.WrappedComponent.name", "");
        const isPlayer = type === "Player";
        const dropdownClass = isPlayer ? "player" : "";

        return (
            <div className="home">
                <header className="home__header">
                    <h2 className="home__title" onClick={this.goHome}>HALFMANHALFMACHINE</h2>
                    <div className="menu">
                        <h4 className="menu--title">Menu</h4>
                    </div>
                </header>
                <aside className={`menu__dropdown ${dropdownClass}`}>
                    <Link className="menu--option" to="/">Home</Link>
                    <Link className="menu--option" to="/videos">Videos</Link>
                    <Link className="menu--option" to="/print">Print</Link>
                    <Link className="menu--option" to="/about">About</Link>
                    <Link className="menu--option" to="/contact">Contact</Link>
                </aside>
                {children}
            </div>
        );
    }

    componentDidMount() {
        this.registerMenuToggle();
    }

    componentWillUpdate(nextProps, nextState) {
        const menuStatusChanged = this.state.menuOpen !== nextState.menuOpen;

        if (menuStatusChanged) {
            this.toggleMenu(nextState.menuOpen);
        }
    }

    toggleMenu(openMenu) {
        const $dropdown = $(".menu__dropdown");

        if (openMenu) {
            $dropdown.fadeIn(1000).css({ display: "flex" });
        } else {
            $dropdown.fadeOut(1000);
        }
    }

    goHome() {
        browserHistory.push(`/`);
    }

    registerMenuToggle() {
        const $menu = $(".menu")
        const $dropdown = $(".menu__dropdown");

        // show the dropdown menu on hover
        $menu.hover(() => {
            this.setState({ menuOpen: true });
        }, ({ relatedTarget }) => {
            const targetIsDropdown = relatedTarget && (relatedTarget.className === "menu--option" || relatedTarget.className.match(/menu__dropdown/) || relatedTarget.className.match(/player/));

            if (!targetIsDropdown) {
                this.setState({ menuOpen: false });
            }
        });

        // hide the menu on dropdown leave
        $dropdown.hover(() => {}, ({ relatedTarget }) => {
            if (relatedTarget && relatedTarget.className !== "menu") {
                this.setState({ menuOpen: false });
            }
        });
    }
}

require("!style-loader!css-loader!sass-loader!./styles/index.scss");
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory, Redirect } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { render } from "react-dom";
import store from "./store";
import Home from "./components/home";
import Player from "./containers/player";
import VideoLibrary from "./containers/videoLibrary";
import PrintLibrary from "./containers/printLibrary";
import About from "./components/about";
import Contact from "./components/contact";
const history = syncHistoryWithStore(browserHistory, store);

const routes = (
    <div>
        <Route path="/" component={Home}>
            <IndexRoute component={Player} />
            <Route path="/videos" component={VideoLibrary} />
                <Route path="/videos/:id" component={Player} />
            <Route path="/print" component={PrintLibrary} />
                <Route path="/print/:id" component={Player} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={Player} />
            <Redirect from="/*" to="/" />
        </Route>
        {addDevTools()}
    </div>
);

render((
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
), document.getElementById("root"));

function addDevTools() {
    if (process.env.DEVTOOLS_ENABLED) {
        const Devtools = require("../devtools/");
        return <Route path="/" component={Devtools} />;
    }
}


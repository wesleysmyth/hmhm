require("!style-loader!css-loader!sass-loader!../styles/index.scss");
import 'babel-polyfill';
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory, Redirect } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { render } from "react-dom";
import store from "./store";
import Home from "./containers/home";
import Player from "./containers/player";
import MagazineViewer from "./containers/magazineViewer";
import Videos from "./containers/videos";
import Magazines from "./containers/magazines";
import Information from "./components/information";
import Contact from "./components/contact";
const history = syncHistoryWithStore(browserHistory, store);

const routes = (
    <div>
        <Route path="/" component={Home}>
            <IndexRoute component={Player} />
            <Route path={`/${global.productionPath}/film-library`} component={Videos} />
                <Route path={`/${global.productionPath}/film-library/:id`} component={Player} />
            <Route path={`/${global.productionPath}/magazine-library`} component={Magazines} />
                <Route path={`/${global.productionPath}/magazine-library/:id`} component={MagazineViewer} />
            <Route path={`/${global.productionPath}/information`} component={Information} />
            <Route path={`/${global.productionPath}/contact`} component={Contact} />
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
        const Devtools = require("../../devtools/");
        return <Route path="/" component={Devtools} />;
    }
}


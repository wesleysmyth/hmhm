require("!style-loader!css-loader!sass-loader!./styles/index.scss");
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route, browserHistory, Redirect } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { render } from "react-dom";
import store from "./store";
import Home from "./containers/home";
import Programming from "./components/programming";
const history = syncHistoryWithStore(browserHistory, store);

const routes = (
    <div>
        <Route path="/" component={Home} />
        <Route path="/programming" component={Programming} />
        <Route path="*" component={Home} />
        <Redirect from="/*" to="/" />
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


import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route, Link, hashHistory } from "react-router";
import ReactDOM from "react-dom";
import store from "./store";
import Home from "./containers/home";
import Programming from "./components/programming";

const component = (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/programming" component={Programming} />
    <Route path="*" component={Home} />
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  document.getElementById("root")
);

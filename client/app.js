global.React = require("react");
const { Component } = React;
const { Router, Route, Link, hashHistory } = require("react-router");
const ReactDOM = require("react-dom");
const store = require("./store");
const Home = require("./components/home");
const Programming = require("./components/programming");

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/programming" component={Programming}/>
    <Route path="*" component={Home} />
  </Router>
), document.body);

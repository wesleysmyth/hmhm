const React = require("react");
const ReactDOM = require("react-dom");
const Devtools = require("./containers/devtools");
const store = require("../src/js/store");

module.exports = (function() {
    const devtoolsEl = document.createElement("div");
    devtoolsEl.className = "redux-devtools";
    document.body.appendChild(devtoolsEl);

    ReactDOM.render(
        <Devtools store={ store } />,
        document.querySelector(".redux-devtools")
    );
})();

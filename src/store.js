import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReduxPromise from "redux-promise-middleware";
import { routerReducer } from "react-router-redux"
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
let createStoreWithMiddleware;

if (process.env.DEVTOOLS_ENABLED) {
    require("../devtools/containers/devtools.jsx");
    createStoreWithMiddleware = compose(
        applyMiddleware(ReduxPromise(), ReduxThunk),
        window.DevTools.instrument()
    )(createStore);
} else {
    createStoreWithMiddleware = compose(
        applyMiddleware(ReduxPromise(), ReduxThunk)
    )(createStore);
}

// Add the reducer to your store on the `routing` key
const store = createStoreWithMiddleware(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);

module.exports = store;

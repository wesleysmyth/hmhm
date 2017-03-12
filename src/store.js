const { createStore, applyMiddleware, compose } = require("redux");
const ReduxPromise = require("redux-promise-middleware");
const rootReducer = require("./reducers");
let createStoreWithMiddleware;

// if (process.env.DEVTOOLS_ENABLED) {
//     createStoreWithMiddleware = compose(
//         applyMiddleware(ReduxPromise()),
//         window.DevTools.instrument()
//     )(createStore);
// } else {
    createStoreWithMiddleware = compose(
        applyMiddleware(ReduxPromise())
    )(createStore);
// }

const store = createStoreWithMiddleware(rootReducer);

module.exports = store;

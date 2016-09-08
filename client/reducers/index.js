const { combineReducers } = require("redux");
const homeReducer = require("./home");

module.exports = combineReducers({
    home: homeReducer,
});
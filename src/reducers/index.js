const { combineReducers } = require("redux");
const homeReducer = require("./home");

module.exports = {
    home: homeReducer,
};
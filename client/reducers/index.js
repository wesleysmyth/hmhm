const { combineReducers } = require("redux");
const programmingReducer = require("./programming");

module.exports = combineReducers({
    programming: programmingReducer
});
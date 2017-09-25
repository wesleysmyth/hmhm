import { combineReducers } from "redux";
import playerReducer from "./player";
import videosReducer from "./videos";

export default {
    player: playerReducer,
    videos: videosReducer
};
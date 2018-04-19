import _ from "underscore";
import videoLibrary from "../data/videos";

export default function videosReducer(state = videoLibrary, action) {
    switch (action.type) {

    case "FETCH_VIDEOS":
        return state;

    case "FILTER_TAGS":
        if (action.tag === "all") {
            return videoLibrary;
        }

        const filteredVideos = videoLibrary.filter(video => _.contains(video.tags, action.tag));
        return filteredVideos;

    default:
        return state;
    }
}

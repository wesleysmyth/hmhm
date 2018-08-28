import _ from "underscore";
import videoLibrary from "../data/videos";
const defaultState = {
    currentTag: "all",
    items: videoLibrary
};

export default function videos(state = defaultState, action) {
    switch (action.type) {

    case "FILTER_VIDEO_TAGS":
        if (action.tag === "all") {
            return defaultState;
        }

        const filteredVideos = videoLibrary.filter(video => _.contains(video.tags, action.tag));

        return {
            currentTag: action.tag,
            items: filteredVideos
        };

    default:
        return state;
    }
}

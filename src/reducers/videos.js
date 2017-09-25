import videoLibrary from "../data/videos";

export default function videosReducer(state = videoLibrary, action) {
    switch (action.type) {

    case "FETCH_VIDEOS":
        return { ...state };

    default:
        return state;
    }
}

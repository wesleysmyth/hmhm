import videos from "../data/videos";

export default function homeReducer(state = {}, action) {
    switch (action.type) {
    case "ADD_PLAYER":
        return { ...state, playerId: action.id };

    case "FETCH_META":
        return { ...state, metaId: action.id };

    case "FETCH_VIDEO":
        return { ...state, currentVideo: videos[ action.id ] };

    case "SET_CURRENT_VIDEO_PLAYER":
        return { ...state, currentVideoPlayer: action.video };

    default:
        return state;
    }
}

module.exports = (state = {}, action) => {

    switch (action.type) {

    case "ADD_PLAYER":
        return { ...state, playerId: action.id };

    case "FETCH_META":
        return { ...state, metaId: action.id };

    case "FETCH_VIDEO":
        return { ...state, currentVideo: action.video };

    case "SET_CURRENT_VIDEO_PLAYER":
        return { ...state, currentVideoPlayer: action.video };

    default:
        return state;
    }
};

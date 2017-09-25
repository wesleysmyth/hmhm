export const addPlayer = id => {
    return {
        type: "ADD_PLAYER",
        id,
    };
};

export const fetchMeta = id => {
    return {
        type: "FETCH_META",
        id,
    };
};

export const fetchVideo = id => {
    return {
        type: "FETCH_VIDEO",
        id,
    };
};

export const setCurrentVideoPlayer = video => {
    return {
        type: "SET_CURRENT_VIDEO_PLAYER",
        video
    }
}

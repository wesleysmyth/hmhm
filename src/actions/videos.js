export const fetchVideos = () => {
    return {
        type: "FETCH_VIDEOS"
    };
};

export const filterTags = tag => {
    return {
        type: "FILTER_TAGS",
        tag
    };
};

export const filterMagazineTags = tag => {
    return {
        type: "FILTER_MAGAZINE_TAGS",
        tag
    };
};

export const filterVideoTags = tag => {
    return {
        type: "FILTER_VIDEO_TAGS",
        tag
    };
};

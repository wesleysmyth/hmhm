module.exports = (state = {}, action) => {

    switch (action.type) {

    case "ADD_PLAYER":
        return Object.assign({}, state, { playerId: action.id });

    case "FETCH_META":
        return Object.assign({}, state, { metaId: action.id });

    case "FETCH_VIDEO":
        return Object.assign({}, state, { videoSrc: action.id });

    default:
        return state;
    }
};

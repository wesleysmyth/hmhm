import videos from "../data/videos";

export default function homeReducer(state = {}, action) {

    switch (action.type) {
    case "ADD_PLAYER":
        return { ...state, playerId: action.id };

    case "FETCH_META":
        return { ...state, metaId: action.id };

    case "FETCH_VIDEO":
        const currentVideo = videos.find(video => video.id === action.id);
        return { ...state, currentVideo };

    case "@@router/LOCATION_CHANGE":
        const { pathname } = action.payload;
        const home = pathname === `/${global.productionPath}/` || pathname === `/${global.productionPath}`;

        return { ...state, home };

    default:
        return state;
    }
}

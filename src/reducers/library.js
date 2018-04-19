const defaultState = { currentTag: "all" };

export default function libraryReducer(state = defaultState, action) {
    switch (action.type) {

    case "FILTER_TAGS":
        return {
            ...state,
            currentTag: action.tag
        };

    default:
        return state;
    }
}

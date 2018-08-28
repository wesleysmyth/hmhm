const defaultState = {
    menuOpen: false
};

export default function menuReducer(state = defaultState, action) {

    switch (action.type) {
    case "@@router/LOCATION_CHANGE":
        return { ...state, menuOpen: false };

    case "TOGGLE_MENU":
        return { ...state, menuOpen: !state.menuOpen };

    default:
        return state;
    }
}

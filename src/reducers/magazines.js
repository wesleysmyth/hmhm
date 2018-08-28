import _ from "underscore";
import magazineLibrary from "../data/magazines";
const defaultState = {
    currentTag: "all",
    items: magazineLibrary
};

export default function magazines(state = defaultState, action) {
    switch (action.type) {

    case "FILTER_MAGAZINE_TAGS":
        if (action.tag === "all") {
            return defaultState;
        }

        const filteredMagazines = magazineLibrary.filter(magazine => _.contains(magazine.tags, action.tag));
        
        return {
            currentTag: action.tag,
            items: filteredMagazines
        };

    default:
        return state;
    }
}

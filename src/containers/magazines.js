import { connect } from "react-redux";
import { filterMagazineTags } from "../actions/library";
import Library from "../components/Library";

function mapStateToProps(state) {
    const { items, currentTag } = state.magazines;

    return {
        type: "magazine",
        items,
        currentTag,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterTags: tag => dispatch(filterMagazineTags(tag)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);

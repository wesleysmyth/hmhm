import { connect } from "react-redux";
import { filterVideoTags } from "../actions/library";
import Library from "../components/Library";

function mapStateToProps(state) {
    const { items, currentTag } = state.videos;

    return {
        type: "video",
        items,
        currentTag,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterTags: tag => dispatch(filterVideoTags(tag)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);

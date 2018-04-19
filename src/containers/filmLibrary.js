import { connect } from "react-redux";
import { fetchVideos, filterTags } from "../actions/videos";
import Library from "../components/Library";

function mapStateToProps(state) {
    return {
        type: "video",
        items: state.videos,
        currentTag: state.library.currentTag,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchVideos: dispatch(fetchVideos()),
        filterTags: tag => dispatch(filterTags(tag)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);

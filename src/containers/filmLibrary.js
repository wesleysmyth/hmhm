import { connect } from "react-redux";
import { fetchVideos } from "../actions/videos";
import Library from "../components/Library";

function mapStateToProps(state) {
    return {
        type: "video",
        items: state.videos,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchVideos: fetchVideos()
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);

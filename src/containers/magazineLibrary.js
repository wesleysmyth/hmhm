import { connect } from "react-redux";
import Library from "../components/Library";

function mapStateToProps(state) {
    return {
        type: "print",
        items: [],
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // fetchVideos: fetchVideos()
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);

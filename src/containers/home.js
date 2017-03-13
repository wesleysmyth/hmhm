import { connect } from "react-redux";
import { addPlayer, fetchMeta, fetchVideo, setCurrentVideoPlayer } from "../actions/home";
import Home from "../components/home";

function mapStateToProps(state) {
    return {
       playerId: state.home.playerId,
       metaId: state.home.metaId,
       currentVideo: state.home.currentVideo,
       currentVideoPlayer: state.home.currentVideoPlayer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addPlayer: id => dispatch(addPlayer(id)),
        fetchMeta: id => dispatch(fetchMeta(id)),
        fetchVideo: video => dispatch(fetchVideo(video)),
        setCurrentVideoPlayer: video => dispatch(setCurrentVideoPlayer(video)),
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);

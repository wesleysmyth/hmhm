import { connect } from "react-redux";
import { addPlayer, fetchMeta, fetchVideo, setCurrentVideoPlayer } from "../actions/player";
import Home from "../components/player";

function mapStateToProps(state, ownProps) {
    return {
       playerId: state.player.playerId,
       metaId: state.player.metaId,
       currentVideo: state.player.currentVideo,
       currentVideoPlayer: state.player.currentVideoPlayer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addPlayer: id => dispatch(addPlayer(id)),
        fetchMeta: id => dispatch(fetchMeta(id)),
        fetchVideo: id => dispatch(fetchVideo(id)),
        setCurrentVideoPlayer: video => dispatch(setCurrentVideoPlayer(video)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

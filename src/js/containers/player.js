import { connect } from "react-redux";
import { addPlayer, fetchMeta, fetchVideo } from "../actions/player";
import Player from "../components/player";

function mapStateToProps(state, ownProps) {
    return {
       playerId: state.player.playerId,
       metaId: state.player.metaId,
       currentVideo: state.player.currentVideo,
       home: state.player.home
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addPlayer: id => dispatch(addPlayer(id)),
        fetchMeta: id => dispatch(fetchMeta(id)),
        fetchVideo: id => dispatch(fetchVideo(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

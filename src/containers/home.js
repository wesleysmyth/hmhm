import { connect } from "react-redux";
import { addPlayer, fetchMeta, fetchVideo } from "../actions/home";
import Home from "../components/home";

function mapStateToProps(state) {
    return {
       playerId: state.home.playerId,
       metaId: state.home.metaId,
       videoSrc: state.home.videoSrc,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addPlayer: id => dispatch(addPlayer(id)),
        fetchMeta: id => dispatch(fetchMeta(id)),
        fetchVideo: id => dispatch(fetchVideo(id)),
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);

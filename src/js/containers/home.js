import { connect } from "react-redux";
import Home from "../components/Home";
import { toggleMenu } from "../actions/menu";

function mapStateToProps(state) {
    return { ...state.menu };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMenu: () => dispatch(toggleMenu())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

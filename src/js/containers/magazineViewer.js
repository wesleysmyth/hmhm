import { connect } from "react-redux";
import MagazineViewer from "../components/magazineViewer";

function mapStateToProps(state, ownProps, three) {
    return {
       magazine: state.magazines.items.find(magazine => magazine.id === ownProps.params.id)
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MagazineViewer);

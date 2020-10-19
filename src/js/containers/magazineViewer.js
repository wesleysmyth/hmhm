import { connect } from "react-redux";
import MagazineViewer from "../components/magazineViewer";

function mapStateToProps(state, ownProps) {
    return {
        magazine: state.magazines.items.find(magazine => magazine.id === ownProps.params.id)
    };
}

export default connect(mapStateToProps)(MagazineViewer);

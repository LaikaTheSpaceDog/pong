import { connect } from "react-redux";
import Home from "./Home";
import { addPlayer } from "../../data/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleAdd: (data) => dispatch(addPlayer(data)),
    }
}

export default connect(null, mapDispatchToProps )(Home);
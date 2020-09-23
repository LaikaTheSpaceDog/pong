import { connect } from "react-redux";
import Home from "./Home";
import { addPlayer } from "../../data/actions";

const mapStateToProps = state => {
    return {
        error: state.error,
        players: state.players
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleAdd: (data) => dispatch(addPlayer(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Home);
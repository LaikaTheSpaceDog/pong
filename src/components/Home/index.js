import { connect } from "react-redux";
import Home from "./Home";
import { addPlayer } from "../../data/actions";

const mapStateToProps = ({players}) => {
    return {
        players: players
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleAddPlayer: () => dispatch(addPlayer()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Home);
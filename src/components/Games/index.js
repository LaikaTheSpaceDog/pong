import { connect } from "react-redux";
import Games from "./Games";
import { reset } from "../../data/actions";

const mapStateToProps = state => {
    return {
        players: state.players,
        games: state.games,
        round: state.round
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleReset: (data) => dispatch(reset(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Games);
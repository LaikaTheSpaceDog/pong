import { connect } from "react-redux";
import Games from "./Games";
import { reset, submitWinner, nextRound } from "../../data/actions";

const mapStateToProps = state => {
    return {
        players: state.players,
        games: state.games,
        round: state.round,
        winners: state.winners,
        winningScore: state.winningScore
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleReset: (data) => dispatch(reset(data)),
        handleSubmit: (data) => dispatch(submitWinner(data)),
        handleNextRound: (data) => dispatch(nextRound(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Games);
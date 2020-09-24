import { connect } from "react-redux";
import Games from "./Games";
import { reset, score1, score2 } from "../../data/actions";

const mapStateToProps = state => {
    return {
        players: state.players,
        games: state.games,
        round: state.round
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleReset: (data) => dispatch(reset(data)),
        handleIncrement1: (player1Name) => dispatch(score1(player1Name)),
        handleIncrement2: (player2Name) => dispatch(score2(player2Name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Games);
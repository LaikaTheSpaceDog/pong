import { connect } from "react-redux";
import Home from "./Home";
import { addPlayer, createTeams } from "../../data/actions";

const mapStateToProps = state => {
    return {
        players: state.players
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleAdd: (data) => dispatch(addPlayer(data)),
        handleTeams: (data) => dispatch(createTeams(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Home);
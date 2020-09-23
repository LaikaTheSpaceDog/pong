import { connect } from "react-redux";
import Games from "./Games";

const mapStateToProps = state => {
    return {
        players: state.players
    };
};

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Games);
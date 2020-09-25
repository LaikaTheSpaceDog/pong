import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ submitted, winners, games }) => {
    return {
        submitted: submitted,
        winners: winners,
        games: games
    };
};


export default connect(mapStateToProps)(App);
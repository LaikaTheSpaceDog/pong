import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ submitted, finished }) => {
    return {
        submitted: submitted,
        finished: finished
    };
};


export default connect(mapStateToProps)(App);
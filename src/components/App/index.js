import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ submitted }) => {
    return {
        submitted: submitted,
    };
};


export default connect(mapStateToProps)(App);
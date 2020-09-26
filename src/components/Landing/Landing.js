import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {

    return(
        <>
            <h1 className="heading">(Ping)-Pong</h1>
            <section className="cardLanding here">
                <div className="rightBar"></div>
                <div className="leftBar"></div>
                <div className="ball"></div>
            </section>
            <div className="centerButton">
                <Link className="button" to="/home">Click to Enter</Link>
            </div>
        </>
    );

}

export default Landing;
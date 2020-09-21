import React from "react";

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
                <button className="button">Click to Enter</button>
            </div>
        </>
    );

}

export default Landing;
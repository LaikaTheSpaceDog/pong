import React from "react";

const Winner = ({ winners, handleReset }) => {

    return(
        <>
            <h1 className="heading">Well Done { winners[0] }!</h1>
            <section className="pyro">
                <div className="before"></div>
                <div className="after"></div>
            </section>
            <section className="centerButton">
                <button className="button reset" onClick={ handleReset }>New Competition</button>
            </section>
        </>
    );

}

export default Winner;
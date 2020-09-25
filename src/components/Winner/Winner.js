import React from "react";

const Winner = ({ winners, handleReset }) => {

    return(
        <>
            <h1 className="heading">Congratulations { winners[0] }!</h1>
            <div className="pyro">
                <div className="before"></div>
                <div className="after"></div>
            </div>
            <button className="button reset" onClick={ handleReset }>New Competition</button>
        </>
    );

}

export default Winner;
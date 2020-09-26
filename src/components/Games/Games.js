import React from "react";
import Card from "../Card/Card";

const whatRound = (games, round) => {
    return(
    games.length === 1 ? "Final" :
    games.length === 2 ? "Semi Finals" :
    games.length === 4 ? "Quarter Finals" : `Round ${round}`
    );
}

const Games = ({ games, handleReset, handleSubmit, handleNextRound, winners, round }) => {
    
    return (
        <>
            <h1 className="heading">{ whatRound(games, round) }</h1>
            <section className="cardGroup">
                { games.map((item, index) => (
                    <Card handleSubmit={ handleSubmit } key={ index } game={ index } id={ `${index}${item.player1}${item.player2}` } player1Name={ item.player1 } player2Name={ item.player2 } />
                ))}
            </section>
            <div className="centerButton">
                { winners.length === games.length ?  
                    <button className="button" onClick={ handleNextRound }>Next Round</button>
                : null }
                <button className="button reset" onClick={ handleReset }>New Competition</button>
            </div>
        </>
    );
}   

export default Games;
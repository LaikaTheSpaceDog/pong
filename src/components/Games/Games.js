import React, { Component } from "react";
import Card from "../Card/Card";

class Games extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            allSubmitted: false
        };

        this.handleAllSubmitted = this.handleAllSubmitted.bind(this);

    };

    handleAllSubmitted(){
        let current = this.props.allSubmitted;
        if (this.props.games.length === this.props.winners.length){
            this.setState({
                ...this.state,
                allSubmitted: !current
            });
        };
    };

    round(){
        let games = this.props.games;
        let round = this.props.round;
        return(
        games.length === 1 ? "Final" :
        games.length === 2 ? "Semi Finals" :
        games.length === 4 ? "Quarter Finals" : `Round ${round}`
        );
    }

    render(){
        
        let { games, handleReset, handleSubmit, handleNextRound, winners } = this.props;

        return (
            <>
                <h1 className="heading">{ this.round() }</h1>
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
}

export default Games;
import React, { Component } from "react";
import Card from "../Card/Card";

class Games extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            allSubmitted: false,
            games: this.props.games
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

    render(){
        
        let { games, handleReset, round, handleSubmit, handleNextRound, winners } = this.props;

        return (
            <>
                <h1 className="heading">Round { round }</h1>
                <section className="cardGroup">
                    { games.map((item, index) => (
                        <Card handleSubmit={ handleSubmit } key={ index } game={ index } id={ `${index}${item.player1}${item.player2}` } player1Name={ item.player1 } player2Name={ item.player2 } />
                    ))}
                </section>
                <div className="centerButton">
                    { winners.length !== 1 ? <button className="button" onClick={ handleNextRound }>Next Round</button> :
                    <p className="plainText">{ winners[0] } Wins! </p> }
                    <button className="button reset" onClick={ handleReset }>New Competition</button>
                </div>
            </>
        );
    }
}

export default Games;
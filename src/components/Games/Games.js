import React, { Component } from "react";
import Card from "../Card/Card";

class Games extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            allSubmitted: false,
            games: this.props.games
        };

        // this.handleAllSubmitted = this.handleAllSubmitted.bind(this);

    };

    // handleAllSubmitted(){
    //     if (this.props.games.length === this.props.winners.length){
    //         this.setState({
    //             ...this.state,
    //             allSubmitted: true
    //         });
    //     };
    // };



    render(){
        
        let { games, handleReset, round, handleSubmit, handleNextRound } = this.props;

        return (
            <>
                <h1 className="heading">Round { round }</h1>
                <section className="cardGroup">
                    { games.map((item, index) => (
                        <Card handleSubmit={ handleSubmit } key={ index } game={ index } player1Name={ item.player1 } player2Name={ item.player2 } />
                    ))}
                </section>
                <div className="centerButton">
                    <button className="button" onClick={ handleNextRound }>Next Round</button>
                    <button className="button reset" onClick={ handleReset }>New Competition</button>
                </div>
            </>
        );
    }
}

export default Games;
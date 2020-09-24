import React, { Component } from "react";
import Card from "../Card/Card";

class Games extends Component {
    
    constructor (props) {
        super(props);

        this.state = {

        };

    };

    render(){
        
        let { games, handleReset, round } = this.props;

        return (
            <>
                <h1 className="heading">Round { round }</h1>
                <section className="cardGroup">
                    { games.map((item, index) => (
                        <Card key={ index } game={ index } player1Name={ item.player1.name } player1Score={ item.player1.score } player2Name={ item.player2.name } player2Score={ item.player2.score } />
                    ))}
                </section>
                <div className="centerButton">
                    <button className="button reset" onClick={ handleReset }>New Competition</button>
                </div>
            </>
        );
    }
}

export default Games;
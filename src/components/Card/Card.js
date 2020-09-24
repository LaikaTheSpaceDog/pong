import React, { Component } from "react";

class Card extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            player1: 0,
            player2: 0
        };

        this.handlePlayer1 = this.handlePlayer1.bind(this);
        this.handlePlayer2 = this.handlePlayer2.bind(this);

    };


    handlePlayer1(){
        let current = this.state.player1;
        this.setState({
            ...this.state,
            player1: current + 1
        });
    }

    handlePlayer2(){
        let current = this.state.player2;
        this.setState({
            ...this.state,
            player2: current + 1
        });
    }
    
    render(){
        
        let { player1Name, player2Name, game } = this.props;
        let { player1, player2 } = this.state;

        return (
            <>
                <article className="fullCard">
                    <header className="cardHeader">
                        <h1 className="gameHeader">Game { game + 1 }</h1>
                    </header>
                    <section className="cardScore">
                        <section className="scoreOdd">
                            <button className="button" onClick={ this.handlePlayer1 }>+</button>
                            <p className="player">{ player1Name}</p>
                        </section>
                        <section className="card here">
                            <p className="score1">{ player1 }</p>
                            <p className="score2">{ player2 }</p>
                                <div className="bar bar1"></div>
                                <div className="bar bar2"></div>
                        </section>
                        <section className="scoreEven">
                            <p className="player">{ player2Name }</p>
                            <button className="button" onClick={ this.handlePlayer2 }>+</button>
                        </section>
                    </section>
                </article>
            </>
        );
    }
}

export default Card;
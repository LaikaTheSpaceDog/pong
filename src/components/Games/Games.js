import React, { Component } from "react";

class Games extends Component {
    
    constructor (props) {
        super(props);

        this.state = {

        };

    };
    
    render(){
        
        let { players } = this.props;
        const games = [];
        for(let i = 0; i < players.length / 2; i += 1){
            games.push (
                <article class="fullCard">
                <header class="cardHeader">
                    <h1 class="gameHeader">Game 1</h1>
                </header>
                <section class="cardScore">
                    <section class="scoreOdd">
                        <button class="button" >+</button>
                        <p class="player">Player 1</p>
                    </section>
                    <section class="card here">
                        <p class="score1">01</p>
                        <p class="score2">03</p>
                            <div class="bar bar1"></div>
                            <div class="bar bar2"></div>
                    </section>
                    <section class="scoreEven">
                        <p class="player">Player 2</p>
                        <button class="button" >+</button>
                    </section>
                </section>
            </article>
            );
        };

        return (
            <>
                <h1 className="heading">Round 1</h1>
                <section className="cardGroup">
                    { games }
                </section>
            </>
        );
    }
}

export default Games;
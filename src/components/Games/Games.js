import React, { Component } from "react";

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
                        <article className="fullCard" key={ index }>
                            <header className="cardHeader">
                                <h1 className="gameHeader">Game { index + 1 }</h1>
                            </header>
                            <section className="cardScore">
                                <section className="scoreOdd">
                                    <button className="button" >+</button>
                                    <p className="player">{ item[0] }</p>
                                </section>
                                <section className="card here">
                                    <p className="score1">01</p>
                                    <p className="score2">03</p>
                                        <div className="bar bar1"></div>
                                        <div className="bar bar2"></div>
                                </section>
                                <section className="scoreEven">
                                    <p className="player">{ item[1] }</p>
                                    <button className="button" >+</button>
                                </section>
                            </section>
                        </article>
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
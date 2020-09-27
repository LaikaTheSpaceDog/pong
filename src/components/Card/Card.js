import React, { Component } from "react";

class Card extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            player1: 0,
            player2: 0,
            winner: 0,
            winnerName: "",
            submitted: false
        };

        this.handlePlayer1 = this.handlePlayer1.bind(this);
        this.handlePlayer2 = this.handlePlayer2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);

    };

    winner(score, player){
        return score >= 21 ? player : 0;
    }

    score(num){
        if(num < 21){
            return num += 1;
        } else {
            return 21;
        }
    }
    
    handlePlayer1(){
        let player1 = this.state.player1;
        this.setState({
            ...this.state,
            player1: this.score(player1),
            winner: this.winner(player1 + 1, 1),
            winnerName: this.winner(player1 + 1, this.props.player1Name)
        });
    }

    handlePlayer2(){
        let player2 = this.state.player2;
        this.setState({
            ...this.state,
            player2: this.score(player2),
            winner: this.winner(player2 + 1, 2),
            winnerName: this.winner(player2 + 1, this.props.player2Name)
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit({...this.state});
        this.setState({
            ...this.state,
            submitted: true
        })
    }

    handleReset(){
        this.setState({
            ...this.state,
            player1: 0,
            player2: 0
        })
    }

    // Checks to see if the id property has changed - if yes, resets scores, winner, winnerName and submitted to original values
    componentDidUpdate(prevProps){
        if(this.props.id !== prevProps.id){
            this.setState({
                ...this.state,
                submitted: false,
                player1: 0,
                player2: 0,
                winner: 0,
                winnerName: ""
            })
        }
    }
    
    render(){
        
        let { player1Name, player2Name, game, winners } = this.props;
        let { player1, player2, winner, submitted } = this.state;

        return (
            <>
                <article className="fullCard">
                    { winners.includes(player1Name || player2Name) ? <p className="plainText centerText">Game { game +1 } Submitted</p> : 
                        <>
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
                            <div className="centerButton">
                                { winner === 0 ? <button className="button" type="button" onClick={ this.handleReset }>Reset</button> : (
                                    submitted !== true ? 
                                    <>
                                        <p className="plainText">{ `${winner === 1 ? player1Name : player2Name} Wins!` }</p>
                                        <button className="button win" type="button" onClick={ this.handleReset }>Reset</button>
                                        <button className="button win" onClick={ this.handleSubmit } type="submit">Submit</button>
                                    </> :
                                    <p className="plainText">Scores submitted!</p>
                                )}
                            </div>
                        </>
                    }
                </article>
            </>
        );
    }
}

export default Card;
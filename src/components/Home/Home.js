import React, { Component } from "react";

class Home extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            playerName: "",
            playerArray: [],
            shuffledPlayers: [],
            playersError: false
        };

        this.handlePlayer = this.handlePlayer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
    };

    handlePlayer(e){
        this.setState({ playerName: e.currentTarget.value });
    };

    handleAddPlayer(){
        this.setState({ 
            playerArray: [
                ...this.state.playerArray,
                    this.state.playerName
            ],
            playerName: "",
            shuffledPlayers: [
                ...this.state.shuffledPlayers,
                    this.state.playerName,
            ],
            idCounter: this.state.idCounter + 1
        });
    };

    powerOf2MoreThan4 = n => {
        return n < 4 ? false : (
        n && (n & (n - 1)) === 0);
    }
    
    handleSubmit(e){
        e.preventDefault();
        if(this.powerOf2MoreThan4(this.state.playerArray.length)){
            this.props.handleAdd({...this.state});
            this.props.handleTeams({...this.state});  
        } else {
            this.setState({
                ...this.state,
                playersError: true
            });
            setTimeout(() => {
                this.setState({
                    ...this.state,
                    playersError: false
                });
            }, 3000);
        };
    }
    
    render(){
        let { playersError } = this.state;
        
        return (
            <article className="body">
                <h1 className="heading">(Ping)-Pong</h1>
                <p className="plainText">Let's play Pong (or ping-pong...)! To create your tournament, please enter the names of all players below. <span className={ playersError ? "plainText blinking" : "plainText" }>You will need a minimum of 4 players and the total number of players must be a power of 2 e.g. 4, 8, 16, 32...</span></p>
                <section className="players">
                    <form className="form" onSubmit={ this.handleSubmit }>
                        <div className="playerForm">
                            <label className="plainText">Enter Name:</label>
                            <input type="text" className="input" onChange={ this.handlePlayer } value={ this.state.playerName }/>
                            <button className="button" onClick={ this.handleAddPlayer } type="button">Add</button>
                        </div>
                        {this.state.playerArray.length === 0 ? null :               
                            <>
                                <ul className="list">
                                    <p className="listTitle">Players:</p>
                                    {this.state.playerArray.map((item, index) => (
                                        <li className="listItem" key={ index }>{ item }</li>
                                    ))}
                                </ul>
                                <div className="break"></div>
                                <button className="button start" type="submit">Start!</button>
                            </>
                        }
                    </form>
                </section>
            </article>
        );
    }
}

export default Home;
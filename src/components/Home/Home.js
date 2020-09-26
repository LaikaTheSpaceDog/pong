import React, { Component } from "react";

class Home extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            playerName: "",
            playerArray: [],
            shuffledPlayers: [],
            playersError: false,
            hovering: 0,
            originalName: 2 // set initially to 2 as ternary below checking for true/false
        };

        this.handlePlayer = this.handlePlayer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleHover = this.handleHover.bind(this);
    };

    handlePlayer(e){
        this.setState({ playerName: e.currentTarget.value });
    };

    originalName = (name) => {
        return !this.state.playerArray.includes(name);
    }

    handleAddPlayer(){
        if(this.originalName(this.state.playerName)){
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
                originalName: true
            });
        } else {
            this.setState({
                originalName: false,
                playerName: ""
            })
        }
    };

    // Checks whether the number passed in is 4 or greater and also a power of 2 (e.g. 4, 8, 16, 32...)
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
            // Sets playersError back to false after 3 seconds so that if user enters wrong number of players again, the warning message below will flash agaim.
            setTimeout(() => {
                this.setState({
                    ...this.state,
                    playersError: false
                });
            }, 3000);
        };
    }

    handleClear(){
        this.setState({
            ...this.state,
            playerArray: [],
            shuffledPlayers: []
        })
    }

    filter(arr, ind){
        return arr.filter((_, index) => index !== ind );
    }

    handleHover(e){
        this.setState({...this.state, hovering: + e.currentTarget.value})
    }
    
    handleFilter(e){
        let index = this.state.hovering;
        this.setState({
            ...this.state,
            playerArray: this.filter(this.state.playerArray, index),
            shuffledPlayers: this.filter(this.state.shuffledPlayers, index)
        })
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
                            {this.state.originalName ? null : <p className="plainText warn">Name already taken!</p>}
                        </div>
                        {this.state.playerArray.length === 0 ? null :               
                            <>
                                <ul className="list">
                                    <p className="listTitle">Players:</p>
                                    {this.state.playerArray.map((item, index) => (
                                        <span className="listLine" key={ index }><li className="listItem">{ item }</li><button type="button" className="xButton" index={ index } value={ index } onMouseEnter={ this.handleHover } onClick={ this.handleFilter } >x</button></span>
                                    ))}
                                    <div className="centerButton">
                                        <button className="button" onClick={ this.handleClear }>Clear</button>
                                    </div>
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
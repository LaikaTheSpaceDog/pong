import React, { Component } from "react";

class Home extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            playerName: "",
            playerArray: []
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
            playerName: "" 
        });
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.handleAdd({...this.state});
    }
    
    render(){
        let { error } = this.props;
        
        return (
            <article className="body">
                <h1 className="heading">(Ping)-Pong</h1>
                <p className="plainText">Let's play Pong (or ping-pong...)! To create your tournament, please enter the names of all players below. You will need a minimum of 2 players and the total number of players must be a power of 2 e.g. 4, 8, 16, 32...</p>
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
                {error !== true ? null :
                        <>
                            <p className="plainText">Please make sure the number of players added is 4 or more and a power of 2</p>
                        </>
                }
            </article>
        );
    }
}

export default Home;
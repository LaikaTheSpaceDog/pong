import React from "react";

const Home = ({ players }) => {
    
    let count = players.count;
    
    return (
        <body className="body">
            <article>
                <h1 className="heading">(Ping)-Pong</h1>
                <p className="plainText">Let's play Pong (or ping-pong...)! To create your tournament, please enter the names of all players below. You will need a minimum of 2 players and the total number of players must be a power of 2 e.g. 4, 8, 16, 32...</p>
                <section class="players">
                    <form>
                        <label class="plainText">Enter Name:</label>
                        <input type="text" class="input" />
                        <button class="button" type="submit">Start!</button>
                    </form>
                    <ul class="list">
                        <li class="listItem">Player 1</li>
                        <li class="listItem">Player 2</li>
                        <li class="listItem">Player 3</li>
                    </ul>
                </section>
            </article>
        </body>

    )
}

export default Home;
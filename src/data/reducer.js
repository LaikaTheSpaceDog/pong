import initial from './initial';

// Given an array of players, return an array of random pairs
const randomPairs = players => {
    shuffle( players );
    var output = [];
    for( var i = 0, n = players.length;  i < n;  i += 2 ) {
        output.push({ player1: players[i], player2: players[i+1] });
    }
    return output;
}

// Shuffle an array in place using the Fisher-Yates algorithm,
// adapted from http://bost.ocks.org/mike/shuffle/
const shuffle = array => {
    for( var m = array.length;  m; ) {
        var i = Math.floor( Math.random() * m-- );
        var t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

const submitPlayers = (state, { players }) => ({
    ...state,
    players: players,
    submitted: true
})

const generateFirstRound = (state, { shuffledPlayers }) => ({
    ...state, 
    games: randomPairs(shuffledPlayers)
})

const reset = () => ({
    ...initial
});

const winner = (state, { winner }) => ({
    ...state,
    winners: [
        ...state.winners,
        winner
    ]
})

const finished = (state) => ({
    ...state,
    finished: state.winners.length === 1 && state.games.length === 1
})


const nextRound = state => ({
    ...state,
    players: state.winners,
    winners: [],
    round: state.round + 1,
    games: randomPairs(state.winners),
})

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYERS": return submitPlayers(state, action);
        case "CREATE_GAMES": return generateFirstRound(state, action);
        case "RESET": return reset();
        case "WINNER": return finished(winner(state, action));
        case "NEXT": return nextRound(state);
        default: return state;
    }
};

export default reducer;
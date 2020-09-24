import initial from './initial';

const powerOf2MoreThan4 = n => {
    return n < 4 ? false : (
    n && (n & (n - 1)) === 0);
}

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
    players: powerOf2MoreThan4(players.length) ? players : [],
    submitted: powerOf2MoreThan4(players.length),
    error: !powerOf2MoreThan4(players.length),
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

const nextRound = state => ({
    ...state,
    players: state.winners,
    winners: [],
    round: state.round + 1,
    games: randomPairs(state.winners)
})

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYERS": return submitPlayers(state, action);
        case "CREATE_GAMES": return generateFirstRound(state, action);
        case "RESET": return reset();
        case "WINNER": return winner(state, action);
        case "NEXT": return nextRound(state);
        default: return state;
    }
};

export default reducer;
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

const generateGames = (state, { shuffledPlayers }) => ({
    ...state, 
    games: randomPairs(shuffledPlayers)
})

const reset = () => ({
    ...initial
});

// const increment1 = (state, { gameNum }) => {
//     const key = gameNum;
//     return{
//         ...state,
//         games: {
//             ...state.games,
//             [key]: {
//                 ...state.games[key],
//                 player1: {
//                     ...state.games[key].player1,
//                     score: state.games[key].player1.score + 1
//                 }
//             }
//         }  
//     }
// };

const score1 = (arr, name) => {
    arr.map((item, index) => {
        if (item.player1.name === name){
            return {
                ...item,
                player1: {
                    ...item.player1,
                    score: item.player1.score + 1
                }
            }
        }
        return item;
    });
}

const increment1 = (state, { player1Name }) =>({
  ...state,
  games: score1(state.games, player1Name)
})

const score2 = (arr, name) => {
    arr.map((item, index) => {
        if (item.player2.name === name){
            return {
                ...item,
                player2: {
                    ...item.player2,
                    score: item.player2.score + 1
                }
            }
        }
        return item;
    });
}

const increment2 = (state, { player2Name }) =>({
  ...state,
  games: score2(state.games, player2Name)
})

// const increment2 = (state, { player2Name }) =>{
//     return state.games.map((item, index) => {
//         if(item.player2.name === player2Name) {
//             return {
//                 ...item,
//                 player1: {
//                     ...item.player2,
//                     score: item.player2.score + 1
//                 }
//             }
//         }
//         return item;
//     });
// }

// const increment2 = (state, { gameNum }) => ({
//     ...state,
//     games: [
//         ...state.games,
//         state.games[gameNum] = {
//             ...state.games[gameNum],
//             player1: {
//                 ...state.games[gameNum].player2,
//                 score: state.games[gameNum].player2.score + 1
//             }
//         }
//     ]
// });

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYERS": return submitPlayers(state, action);
        case "CREATE_GAMES": return generateGames(state, action);
        case "RESET": return reset();
        case "INCREMENT1": return increment1(state, action);
        case "INCREMENT2": return increment2(state, action);
        default: return state;
    }
};

export default reducer;
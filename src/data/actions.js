export const addPlayer = ({ playerArray }) => {
    return {
        type: "ADD_PLAYERS",
        players: playerArray
    };
};

export const createTeams = ({ playerArray, shuffledPlayers, winningScore }) => {
    return {
        type: "CREATE_GAMES",
        players: playerArray,
        shuffledPlayers: shuffledPlayers,
        winningScore: winningScore
    };
};

export const reset = () => {
    return {
        type: "RESET"
    };
};

export const submitWinner = ({ winnerName }) => {
    return {
        type: "WINNER",
        winner: winnerName
    };
};

export const nextRound = () => {
    return {
        type: "NEXT"
    };
};
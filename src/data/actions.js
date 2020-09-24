export const addPlayer = ({ playerArray }) => {
    return {
        type: "ADD_PLAYERS",
        players: playerArray
    };
};

export const createTeams = ({ playerArray, shuffledPlayers }) => {
    return {
        type: "CREATE_GAMES",
        players: playerArray,
        shuffledPlayers: shuffledPlayers
    };
};

export const reset = () => {
    return {
        type: "RESET"
    };
};

export const score1 = ({ index, player1Name }) => {
    return {
        type: "INCREMENT1",
        gameNum: index,
        player1Name: player1Name
    };
};

export const score2 = ({ index, player2Name }) => {
    return {
        type: "INCREMENT2",
        gameNum: index,
        player2Name: player2Name
    };
};
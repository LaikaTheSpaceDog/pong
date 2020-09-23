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
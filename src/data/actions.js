export const addPlayer = ({ playerArray }) => {
    return {
        type: "ADD_PLAYERS",
        players: playerArray
    };
};
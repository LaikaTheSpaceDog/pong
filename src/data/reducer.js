const player = (state, { players }) => ({
    ...state,
    players: players
}) 

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYERS": return player(state, action);
        default: return state;
    }
};

export default reducer;
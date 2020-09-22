const player = state => ({
    ...state,
    players: [
        ...state.players,
        state.input,
    ]
}) 

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return player(state);
        default: return state;
    }
};

export default reducer;
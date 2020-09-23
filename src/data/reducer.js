const powerOf2MoreThan4 = n => {
    return n < 4 ? false : (
    n && (n & (n - 1)) === 0);
}

const player = (state, { players }) => ({
    ...state,
    players: powerOf2MoreThan4(players.length) ? players : [],
    error: !powerOf2MoreThan4(players.length),
    submitted: powerOf2MoreThan4(players.length)
}) 

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYERS": return player(state, action);
        default: return state;
    }
};

export default reducer;
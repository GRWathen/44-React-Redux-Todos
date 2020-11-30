const INITIAL_STATE = [];

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];

        case "COMPLETE":
            const completeTodos = state.map(function (value) {
                if (value.id === action.payload.id) {
                    value["complete"] = true;
                }
                return (value);
            });
            return completeTodos;

        case "DELETE":
            const deleteTodos = state.filter(function (value) {
                return (value.id !== action.payload.id);
            });
            return deleteTodos;

        default:
            return state;
    }
}

export default rootReducer;

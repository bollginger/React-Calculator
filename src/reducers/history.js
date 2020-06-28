export default function history(state = [], action) {
    switch (action.type) {
        case "ADD_CALCULATION":
            return state.concat(action.calculation);
        case "CLEAR_CALCULATIONS":
            return [];
        default:
            return state;
    }
}
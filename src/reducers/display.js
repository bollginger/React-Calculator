export default function display(state = '0', action){
    switch (action.type) {
        case "UPDATE_DISPLAY":
            return action.display;
        case "CLEAR_DISPLAY":
            return '0';
        default:
            return state;
    }
}
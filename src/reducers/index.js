//import { combineReducers } from 'redux'
import history from './history.js'
import display from './display.js'

const initialState = {
    display: '0',
    history: []
}

function rootReducer (state = initialState, action) {
    if (action.type === "UPDATE_DISPLAY" || action.type === "CLEAR_DISPLAY"){
        return Object.assign({}, state, {
            display: display(state.display, action)
          });
    } else if (action.type === "ADD_CALCULATION" || action.type === "CLEAR_CALCULATIONS"){
        return Object.assign({}, state, {
            history: history(state.history, action)
          });
    }
    return state;
}

export default rootReducer;
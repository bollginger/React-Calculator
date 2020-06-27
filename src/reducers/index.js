import { combineReducers } from 'redux'
import history from './history.js'
import display from './display.js'

export default combineReducers({
    display:display, 
    history:history
})

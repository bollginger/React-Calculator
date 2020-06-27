/*
 * action types
 */

 export const UPDATE_DISPLAY;
 export const CLEAR_DISPLAY;
 export const ADD_CALCULATION;
 export const CLEAR_CALCULATIONS;

/*
 * action creators
 */

export function updateDisplay(display) {
    return { type: UPDATE_DISPLAY, display }
}
  
export function clearDisplay() {
    return { type: CLEAR_DISPLAY }
}
  
export function addCalculation(calculation) {
    return { type: ADD_CALCULATION, calculation }
}
  
export function clearCalculations() {
    return { type: CLEAR_CALCULATIONS }
}
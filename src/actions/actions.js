/*
 * action creators
 */

export function updateDisplay(display) {
    return { type: "UPDATE_DISPLAY", display }
}
  
export function clearDisplay() {
    return { type: "CLEAR_DISPLAY", display:'0' }
}
  
export function addCalculation(calculation) {
    return { type: "ADD_CALCULATION", calculation }
}
  
export function clearCalculations() {
    return { type: "CLEAR_CALCULATIONS", calculation:'0' }
}
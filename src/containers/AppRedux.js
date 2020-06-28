import App from '../components/App';
import { connect } from 'react-redux';
import { clearCalculations } from '../actions/actions';
import { clearDisplay } from '../actions/actions';
import { addCalculation } from '../actions/actions';
import { updateDisplay } from '../actions/actions';

const initialState = {
    display: '0',
    history: []
}

const mapStateToProps = (state = initialState) => {
    return {
        history: state.history,
        display: state.display
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    updateDisplay: display => dispatch(updateDisplay(display)),
    clearDisplay: () => dispatch(clearDisplay()),
    addCalculation: calc => dispatch(addCalculation(calc)),
    clearCalculations: () => dispatch(clearCalculations())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
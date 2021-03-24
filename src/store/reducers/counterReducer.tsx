import { updateObject } from '../../shared/utilities';
import * as CounterActions from '../actions/counter';
export interface CounterState {
    count: number
}
const initialState: CounterState = {
    count: 0
};

const addCounter = (state: CounterState, action: CounterActions.AddCounter): CounterState => {
    return updateObject(state, { count: state.count + action.payload });
};

const subCounter = (state: CounterState, action: CounterActions.SubCounter): CounterState => {
    return updateObject(state, { count: state.count - action.payload });
};

const reducer = (state = initialState, action: CounterActions.CounterActions): CounterState => {
    switch (action.type) {
        case CounterActions.ADD_COUNTER: return addCounter(state, action);
        case CounterActions.SUB_COUNTER: return subCounter(state, action);

        default: return state;
    }
};

export default reducer;
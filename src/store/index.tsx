import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import counterReducer, { CounterState } from './reducers/counterReducer';
import appReducer, { MyAppState } from './reducers/appReducer';
import thunk from 'redux-thunk';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export interface MyAction extends Action {
    payload?: any
}
export type AppState = {
    app: MyAppState,
    counter: CounterState
}
const rootReducer = combineReducers<AppState>({
    app: appReducer,
    counter: counterReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;
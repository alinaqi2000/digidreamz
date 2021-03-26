import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import appReducer, { MyAppState } from './reducers/appReducer';
import thunk from 'redux-thunk';
import firebase from 'firebase/app'
import { config } from "../firebase.config";
// import { reducer as firebaseReducer } from "react-redux-firebase";
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'

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
    firebase: FirebaseReducer.Reducer
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
}

// Initialize firebase instance
firebase.initializeApp(config);
const rootReducer = combineReducers<AppState>({
    app: appReducer,
    firebase: firebaseReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
}

export default store;
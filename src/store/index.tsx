import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import appReducer, { MyAppState } from './reducers/appReducer';
import thunk from 'redux-thunk';
import firebase from 'firebase/app'

import "./firebase";
// import { reducer as firebaseReducer } from "react-redux-firebase";
import { firebaseReducer, FirebaseReducer, FirestoreReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

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
    firestore: FirestoreReducer.Reducer
}

const rootReducer = combineReducers<AppState>({
    app: appReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
}
export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

export default store;
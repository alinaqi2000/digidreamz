import { FirebaseReducer } from 'react-redux-firebase';
import { AppState } from '../store';


export const getProfile = (state: FirebaseReducer.Reducer): any => {
    console.log("firebase", state);

    const provider: string | null = state.auth.providerData && state.auth.providerData[0].providerId;
    switch (provider) {
        case "google.com":
            return state.auth;
            break;
        case "password":
            return state.profile;
            break;
        default:
            return state.auth;
            break;
    }
}
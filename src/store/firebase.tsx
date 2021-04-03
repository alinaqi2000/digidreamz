import firebase from 'firebase/app'

import "firebase/auth";
import "firebase/firestore"
import { config } from "../firebase.config";

// Initialize firebase instance
firebase.initializeApp(config);
export default firebase.firestore();
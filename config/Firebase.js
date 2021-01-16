import firebase from "firebase";
import apiKeys from "./apiKeys";
if (!firebase.apps.length)
    firebase.initializeApp(apiKeys.firebaseConfig);
else firebase.app();
console.log("Firebase setup!");

let db = firebase.firestore();
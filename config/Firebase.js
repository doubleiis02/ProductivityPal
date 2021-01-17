import firebase from "firebase";
import apiKeys from "./apiKeys";
if (!firebase.apps.length)
    firebase.initializeApp(apiKeys.firebaseConfig);
else firebase.app();
console.log("Firebase setup!");

let db = firebase.firestore();


export async function setProfile(result) {
    db.collection("users").doc(result.user.uid).set({
      uid: result.user.uid,
      gmail: result.user.email,
      profilePic: result.user.photoURL,
      displayName: result.user.displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLoggedIn: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
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
      profilePic:
        "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
      displayName: result.user.displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLoggedIn: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log((await db.collection("users").doc(result.user.uid).get()).data());
    if (result.user.photoUrl != null)
      db.collection("users").doc(result.user.uid).update({
        profilePic: result.user.photoUrl,
      });
  }
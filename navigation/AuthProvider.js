import React, { createContext, useState} from "react";
import firebase from "firebase";
import apiKeys from "../config/apiKeys.js";
import * as Google from "expo-google-app-auth";
import {setProfile} from "../config/Firebase";
export const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [establishedWifiConnection, setEstablishedWifiConnection]=useState(false);
    return (
        <AuthContext.Provider
          value={{
            user,
            setUser,
            establishedWifiConnection,
            setEstablishedWifiConnection,
            login: async () => {
                try {
                  const result = await Google.logInAsync({
                    androidClientId: apiKeys.authClient.androidID,
                    iosClientId: apiKeys.authClient.iosID,
                    scopes: ["profile", "email"],
                  });
            
                  if (result.type === "success") {
                    onSignIn(result);
            
                    return result.accessToken;
                  } else {
                    console.log("Cancelled");
                  }
                } catch (e) {
                  console.log("error");
                } 
              },
            logout: async () => {
              try {
                firebase.auth().signOut();
              } catch (e) {
                console.error(e);
              }
            }
            
          }}
        >
          {children}
        </AuthContext.Provider>
      );
    };

//Using guide to figure out AuthProvider
googleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: ApiKeys.authClient.androidID,
        iosClientId: ApiKeys.authClient.iosID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);

        return result.accessToken;
      } else {
        console.log("Cancelled");
      }
    } catch (e) {
      console.log("error");
    }
  };

  onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.

          const credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken, //Changed from original, check 3:00 of tutorial
            googleUser.accessToken
          );

          // Sign in with credential from the Google user.
          console.log(credential);
          firebase //This function is not working RN!
            .auth()
            .signInWithCredential(credential)
            .then(function (result) {
              console.log("Signed in!");

              if (result.additionalUserInfo.isNewUser) {
                setProfile(result);
              }
            })
            .catch(function (error) {
              // Handle Errors here.
              console.log("error signing in");
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }
    );
  };

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };



    
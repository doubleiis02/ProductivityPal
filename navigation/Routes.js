import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from './AuthProvider';
import { ActivityIndicator} from "react-native";
import firebase from "firebase";

export default function Routes(){
    const {user, setUser} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);
    // Handle user state changes
  
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(
        function (user) {
            setUser(user);
            if (initializing) setInitializing(false);
            setLoading(false);
        }

    );
    return subscriber; // unsubscribe on unmount
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
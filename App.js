import React from 'react';
import Providers from './navigation/index';
export default function App() {
  return <Providers />;
}



// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
// import {BaseNavigationContainer}from '@react-navigation/native';
// import {createStackNavigator} from "@react-navigation/stack";
// import { StyleSheet, Text, View } from 'react-native';
// import LoginScreen from "./screens/LoginScreen";
// import HomeScreen from "./screens/HomeScreen";
// import LoginRegisterScreen from "./screens/LoginRegisterScreen";
// import Firebase from "./config/Firebase.js";
// import Providers from "./navigation/index";


// export default function App() {
//   const Stack = createStackNavigator();
//   return (
//     <BaseNavigationContainer>
//       <Stack.Navigator
//       initialRouteName="Login"
//       headerMode="screen"
//       screenOptions={{
//         headerTintColor: 'white',
//         headerStyle: { backgroundColor: 'tomato'}}}>
//         <Stack.Screen name="Home" component={HomeScreen}/>
//         <Stack.Screen name = "LoginRegister" component={LoginRegisterScreen}/>
        
//       </Stack.Navigator>
//     </BaseNavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {useState, useContext} from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { AuthContext } from "../navigation/AuthProvider";

export default function LoginRegister(props){

    const {login} = useContext(AuthContext);

    function handleLogin(){
        login();
    }

            
    return (
        <View style = {styles.container}>
            <Text>Log In or Register to ProductivityPal</Text>


            <Button 
            title = "Sign in or register with google"
            onPress = {handleLogin}/>


            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column"
    },

    register: {
        display: "flex",
        flexDirection: "row",
        width: "70%"
    },

    registerInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "70%"
    }
  });


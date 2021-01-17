import React, {useState, useContext} from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';
import { AuthContext } from "../navigation/AuthProvider";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";


export default function LoginRegister(props){

    const {login} = useContext(AuthContext);

    function handleLogin(){
        login();
    }

            
    return (
        <View style = {styles.container}>

        <Text style = {styles.titleText}>Productivity Pal</Text>
            <FontAwesomeIcons name = "gears" style = {styles.appLogo}/>
            


            <TouchableOpacity 
            onPress = {handleLogin}
            style= {styles.loginButton}>
            <Text>Sign In or Register With Google</Text>
            </TouchableOpacity>


            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: "column"
    },

    titleText: {
        fontSize: 40
    },
    appLogo: {
        height: 120,
        width: 120,
        fontSize: 100,
        margin:10,
        backgroundColor: "#FFFFFF"
    },

    loginButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20,
        
        
    }
  });


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

            <View
                style= {styles.appLogoContainer}>
                    <FontAwesomeIcons name = "gears" style = {styles.appLogo}/>
                </View>
            


            <TouchableOpacity 
            onPress = {handleLogin}
            style= {styles.signinButton}>
            <Text>Sign In or Register With Google</Text>
            </TouchableOpacity>


            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffedd9',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: "column"
      },

    titleText: {
        fontSize: 40,
        fontWeight: "bold"
    },
    appLogo: {
        height: 120,
        width: 120,
        fontSize: 100,
        margin:10,

    },

    appLogo: {
        height: 120,
        padding: 5,
        borderRadius: 20,
        width: 120,
        fontSize: 100,
        marginLeft: 25,
        marginTop: 10
    },
    appLogoContainer: {
        height: 180,
        width: 180,
        backgroundColor: "#b3d0ff",
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 30,
    },

    signinButton: {
        alignItems: "center",
        backgroundColor: "#b3d0ff",
        padding: 20,
        borderRadius: 20
        
        
    }

  });


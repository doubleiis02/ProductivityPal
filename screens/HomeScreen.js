import React, {useState, useContext, useEffect} from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import {AuthContext} from "../navigation/AuthProvider"


export default function HomeScreen(props){
    const {user, setUser, logout} = useContext(AuthContext);
    const [userName, setUserName] = useState(null);
    const [profilePic, setProfilePic] = useState("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png");
    console.log(user);
    console.log("URL: " +user.photoURL);
    function handleWifi(){
        console.log("attempting to connect to microcontroller");
    }

    useEffect(() => {
        setUserName(user.displayName);
        setProfilePic(user.photoURL);

      }, []); //ComponentDidMount
    return (
        <View style = {styles.container}>
            <Text>Welcome, {userName}</Text>
            <Image style ={styles.profilePic} source = {{uri: profilePic}}/>
            <Text>This is our home screen!</Text>
            <TouchableOpacity 
            onPress = {handleWifi}
            style= {styles.connectButton}>
            <Text>Connect to Wifi Microcontroller Via Wifi</Text>
            </TouchableOpacity>
            
            <Button title = "Log Out!"
            onPress={() => logout()}/>
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

    profilePic: {
        height: 30,
        width: 30,
        margin:10,
        
    },

    connectButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20,
        
        
    }

  });
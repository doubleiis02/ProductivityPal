import React, {useState, useContext, useEffect} from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import {AuthContext} from "../navigation/AuthProvider";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import {Header} from "react-native-elements";


export default function HomeScreen(props){
    const {user, setUser, logout, 
        establishedWifiConnection, setEstablishedWifiConnection} = useContext(AuthContext);
    const [userName, setUserName] = useState(null);
    const [profilePic, setProfilePic] = useState("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png");
    console.log(user);
    console.log("URL: " +user.photoURL);
    function handleWifi(){
        console.log("attempting to connect to microcontroller"); //Faulty hardware means we can't communicate
    }
    const attemptWifi = () =>
    Alert.alert(
        "Establishing Connection Confirmation",
        "Would you like to establish communication between this app and the microcontroller?",
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Yes", onPress: () => handleWifi() }
        ],
        { cancelable: false }
      );
    const attemptTerminate = () =>
    Alert.alert(
        "Communication Termination Confirmation",
        "Would you like to terminate communication between this app and the microcontroller?",
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Yes", onPress: () => terminateConnection() }
        ],
        { cancelable: false }
      );
    
    function terminateConnection() {
        console.log("Terminate Connection"); //Unable to communicate due to faulty hardware
    }
    
    

    useEffect(() => {
        setUserName(user.displayName);
        setProfilePic(user.photoURL);

      }, []); //ComponentDidMount

      const attemptLogout = () =>
    Alert.alert(
      "Logout Confirmation",
      "Are you sure that you would like to logout?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => logout() }
      ],
      { cancelable: false }
    );

    return (
        <SafeAreaView style = {styles.container}>

                <Text style = {styles.boldedTitleText}>Establish Wifi Connection To Get Started</Text>
                
                
                <TouchableOpacity
                onPress = {attemptWifi}
                style= {styles.connectButtonContainer}>
                    <FontAwesomeIcons name = "gears" style = {styles.connectButton}/>
                </TouchableOpacity>

                <View style ={{marginTop: 30, marginBottom: 30}}>
                    <Text style = {styles.bodyText}>Conection Status: </Text>
                    <Text style = {styles.bodyText}>{!establishedWifiConnection && <Text>Not </Text>}Connected</Text>
                </View>

                <TouchableOpacity 
                onPress = {() => attemptTerminate()}
                style= {styles.button}>
                <Text style = {{fontSize: 25}}>Terminate Connection</Text>
                
                </TouchableOpacity>

                <View style = {{marginTop: 60}}>
                    <TouchableOpacity 
                    onPress = {() => attemptLogout()}
                    style= {styles.button}>
                    <Text style = {{fontSize: 15}}>Log out of {userName}</Text>
                    </TouchableOpacity>
                </View>

                
           
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      backgroundColor: '#ffedd9',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: "column",
      textAlign: "center"
    },
    profileHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "70%"

    },

    titleText: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 30,
        textAlign: "center"
    },

    boldedTitleText: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
        
    },

    bodyText: {
        fontSize: 30, 
        textAlign: "center"
    },

    profilePic: {
        height: 15,
        width: 15,
        margin:10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#b3d0ff",
        padding: 20,
        borderRadius: 20

    },
    connectButton: {
        height: 120,
        padding: 5,
        borderRadius: 20,
        width: 120,
        fontSize: 100,
        marginLeft: 25,
        marginTop: 10
    },
    connectButtonContainer: {
        height: 180,
        width: 180,
        backgroundColor: "#b3d0ff",
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 50,
    },

  });
import React, {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert} from 'react-native';
import {AuthContext} from "../navigation/AuthProvider";
import DateTimePicker from "@react-native-community/datetimepicker";


export default function AddActivityScreen(props){
    const [activityTimeHour, setActivityTimeHour] = useState("HR");
    const [activityTimeMin, setActivityTimeMin] = useState("MIN");
    const [activityTimeAMPM, setActivityTimeAMPM] = useState("default");
    const [activityName, setActivityName] = useState("Name Your Activity");
    const {user, } = useContext(AuthContext);


    function handleCreateItem(){
        console.log ("Attempting to create item");
        if (activityName === "Name Your Activity" || activityTimeHour<0 || activityTimeHour>12 || (activityTimeHour%1) != 0 || !(activityTimeHour) 
        || activityTimeHour === "HR"|| activityTimeMin<0 || activityTimeMin>59 || (activityTimeMin%1) !=0 
        || (activityTimeMin === "MIN") || activityTimeAMPM === "default"){
            TimeError();

        }
        //WRITE TO DATABASE
        setActivityTimeHour(null);
        setActivityTimeMin(null);
        setActivityName("");
        
    }
    
    function TimeError(){
        Alert.alert(
            "Error Selecting Time",
            "Invalid Time Chosen",
            [
                {
                text: "Ok",
                onPress: () =>console.log("OK")
                }
            ]);
    }
    function handleSelectAM(){
        setActivityTimeAMPM("AM");
    }

    function handleSelectPM(){
        setActivityTimeAMPM("PM");
    }


    return (
        <View style = {styles.container}>


            <Text>Add a scheduled item here</Text>
            <View style = {styles.register}>
                <Text>Activity Name:</Text>
                <TextInput
                style = {styles.registerInput}
                onChangeText= {text=> setActivityName(text)}
                autoCapitalize= "none"
                autoCorrect= {false}
                value ={activityName}
                />

                
            </View>

            <View style = {styles.timeChoose}>
                <Text>Designated Time:</Text>
                <TextInput
                style = {styles.timeInput}
                keyboardType = "numeric"
                maxLength = {12}
                onChangeText= {text=> setActivityTimeHour(text)}
                autoCapitalize= "none"
                autoCorrect= {false}
                value ={activityTimeHour}
                />
                <Text>:</Text>

                <TextInput
                style = {styles.timeInput}
                keyboardType = "numeric"
                maxLength = {60}
                onChangeText= {text=> setActivityTimeMin(text)}
                autoCorrect= {false}
                value ={activityTimeMin}
                />

            <TouchableOpacity 
            style= {styles.smallButton}
            onPress = {handleSelectAM}>
            <Text>AM</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style= {styles.smallButton}
            onPress = {handleSelectPM}>
            <Text>PM</Text>
            </TouchableOpacity>
                
            </View>

            
            <TouchableOpacity 
            onPress ={handleCreateItem}
            style= {styles.button}>
            <Text>Add To Your Schedule</Text>
            </TouchableOpacity>
            
            

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

    timeChoose: {
        display: "flex",
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-evenly"
    },

    registerInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "70%"
    },

    timeInput : {
        width: "10%",
        borderWidth: 1,
        borderColor: "black",
    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20,
    },

    smallButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 5
    }

  });
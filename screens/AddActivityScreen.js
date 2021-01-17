import React, {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View,SafeAreaView, Button, TouchableOpacity, TextInput, Alert} from 'react-native';
import {AuthContext} from "../navigation/AuthProvider";



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
            return;
        }
        //WRITE TO DATABASE, ran out of time to implement
        setActivityTimeHour(null);
        setActivityTimeMin(null);
        setActivityName("");
        SuccesfulAddition();

        
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

    function SuccesfulAddition(){
        Alert.alert(
            "Success",
            "Item Successfully Added To Schedule",
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
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.boldedTitleText}>Additional Scheduled Items</Text>
            <View >
                <Text style = {styles.titleText}>Activity Name:</Text>
                <TextInput
                style = {styles.registerInput}
                onChangeText= {text=> setActivityName(text)}
                autoCapitalize= "none"
                autoCorrect= {false}
                value ={activityName}
                />

                
            </View>

            
                <Text style = {styles.titleText}>Designated Time:</Text>
                <View style = {styles.timeChoose}>
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

            <TouchableOpacity 
                onPress = {() => props.navigation.navigate("Schedule")}
                style= {styles.moveButton}>
                <Text>Back to Your Schedule</Text>
                </TouchableOpacity>
            
            

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



    timeChoose: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-evenly",
        marginBottom: 40
    },

    registerInput: {
        borderWidth: 1,
        borderColor: "black",
        width: 200,
        height: "20%",
        textAlign: "center"
    },

    timeInput : {
        width: "10%",
        borderWidth: 1,
        borderColor: "black",
        textAlign: "center"
    },

    button: {
        alignItems: "center",
        backgroundColor: "#b3d0ff",
        padding: 20,
        borderRadius: 20
    },

    moveButton: {
        marginTop: 50,
        alignItems: "center",
        backgroundColor: "#b3d0ff",
        padding: 20,
        borderRadius: 20
    },

    smallButton: {
        alignItems: "center",
        backgroundColor: "#b3d0ff",
        padding: 5,
    }

  });
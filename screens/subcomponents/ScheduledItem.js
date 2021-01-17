import React, {useState} from "react";
import {Checkbox} from "react-native-paper";
import { StyleSheet, Text, View, Button} from 'react-native';
export default function ScheduledItem(props){
    const [isChecked, setChecked] = useState(props.item.completion);
    function displayTime(timeScheduled){
        return (
            <View style = {styles.clockDisplay}>
                <Text> {props.item.timeScheduledMilitaryHr}</Text>
                <Text>:</Text>
                <Text>{props.item.timeScheduledMin}</Text>
                
                
            </View>
        )
    }
    return(
        <View>
            <View style ={styles.itemHeader}>
                <Text> {props.item.name}</Text>
                <Text> {displayTime(props.item.timeScheduled)} </Text>
                <Checkbox 
                status = {isChecked ? "checked" : "unchecked"}
                disabled = {true}
                />
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        width: "80%",
        height: "20%",
        textAlign: "left",

    },

    registerInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "70%"
    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20,

    }
  });
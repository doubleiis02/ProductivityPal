import React, {useState} from "react";
import {Checkbox} from "react-native-paper";
import { StyleSheet, Text, View, Button} from 'react-native';
export default function ScheduledItem(props){
    const [isChecked, setChecked] = useState(props.item.completion);
    function displayTime(timeScheduled){
        return (
            <View style = {styles.clockDisplay}>
                <Text> {props.item.timeScheduledMilitaryHr} : {props.item.timeScheduledMin}</Text>  
            </View>
        )
    }
    return(
        <View style = {styles.itemContainer}>
            <View style ={styles.itemHeader}>
                <Text style = {styles.boldedText}> {props.item.name}</Text>
                <Text style = {styles.bodyText}> at {props.item.timeScheduledMilitaryHr}: 
                {props.item.timeScheduledMin <10 ? ("0" + props.item.timeScheduledMin) : props.item.timeScheduledMin}
                {props.item.timeScheduledMilitaryHr>11 ? " PM" : " AM"} </Text>
                <Checkbox 
                status = {isChecked ? "checked" : "unchecked"}
                disabled = {true}
                />
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        maxWidth: "85%",
        minWidth: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#b3d0ff",
        padding: 10,
        borderRadius: 10,
        fontSize: 20
    },

    boldedText: {
        fontWeight: "bold",
        fontSize: 30
    },
    bodyText: {
        fontSize: 20
    },


  });
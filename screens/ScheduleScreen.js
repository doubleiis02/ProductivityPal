import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


export default function ScheduleScreen(props){
    return (
        <View style = {styles.container}>
            <Text>This is our Schedule Screen!</Text>
            <Button title = "Back to Home Page"
            onPress={() => props.navigation.navigate("Home")}/>
        </View>
    )
}
import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


export default function HeatmapScreen(props){
    return (
        <View style = {styles.container}>
            <Text>This is our Heatmap Screen!</Text>
            <Button title = "Back to Home Page"
            onPress={() => props.navigation.navigate("Home")}/>
        </View>
    )
}
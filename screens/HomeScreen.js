import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


export default function HomeScreen(props){
    return (
        <View style = {styles.container}>
            <Text>This is our home screen!</Text>
            <Button title = "Log In or Register!"
            onPress={() => props.navigation.navigate("LoginRegister")}/>
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

  });
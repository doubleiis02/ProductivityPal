import React from "react";
import { StyleSheet, Text, View, Button,} from 'react-native';

export default function LoginScreen(props){
    return (
        <View style = {styles.container}>
            <Text>This is our Login screen!</Text>
            <Button title = "Back to Home Screen!"
            onPress={() => props.navigation.navigate("Home")}/>
            <Button title = "Get Started"
            onPress = {() =>props.navigation.navigate("Register")}/>
            <Text>Testing State Here: {props.testState}</Text>
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


import React, {useContext} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import {AuthContext} from "../navigation/AuthProvider"


export default function HomeScreen(props){
    const {logout} = useContext(AuthContext);
    return (
        <View style = {styles.container}>
            <Text>This is our home screen!</Text>
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

  });
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {BaseNavigationContainer}from '@react-navigation/native';
const Stack = createStackNavigator();
import HomeScreen from "../screens/HomeScreen.js";

export default function HomeStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name ="Home" component = {HomeScreen}/>
        </Stack.Navigator>
    )
}
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginRegisterScreen from "../screens/LoginRegisterScreen";
export default function AuthStack(props){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName = "LoginRegister">
            <Stack.Screen
                name = "LoginRegister"
                component = {LoginRegisterScreen}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    )
}
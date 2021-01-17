import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScheduleScreen from "../screens/ScheduleScreen";
import AddActivityScreen from "../screens/AddActivityScreen";
export default function HeatmapStack(props){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName = "Schedule">
            <Stack.Screen
                name = "Schedule"
                component = {ScheduleScreen}
                options={{ header: () => null }}/>
            <Stack.Screen
                name = "AddActivity"
                component = {AddActivityScreen}
                options={{ header: () => null }}/>

        </Stack.Navigator>
    )


}
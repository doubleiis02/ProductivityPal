import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DisplayHeatmapScreen from "../screens/DisplayHeatmapScreen";
import HeatmapSettingsScreen from "../screens/HeatmapSettingsScreen";
export default function HeatmapStack(props){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName = "HeatmapSettings">
            <Stack.Screen
                name = "HeatmapSettings"
                component = {HeatmapSettingsScreen}
                options={{ header: () => null }}/>
            <Stack.Screen
                name = "DisplayHeatmap"
                component = {DisplayHeatmapScreen}
                options={{ header: () => null }}/>

        </Stack.Navigator>
    )


}

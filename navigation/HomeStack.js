import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "../screens/HomeScreen.js";
import ActivitiesScreen from "../screens/ActivitiesScreen";
import HeatmapScreen from "../screens/HeatmapScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatherIcons from "react-native-vector-icons/Feather";

const Tab = createMaterialBottomTabNavigator();

export default function HomeStack(){
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name ="Home" 
            tabBarLabel= "Home" 
            component = {HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen 
            name ="Activities" 
            tabBarLabel= "Activities" 
            component = {ActivitiesScreen}
            options={{
                tabBarLabel: 'Activities',
                tabBarIcon: ({ color }) => (
                  <FeatherIcons name="activity" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen name ="Heatmap"
            tabBarLabel= "Heatmap"
            component = {HeatmapScreen}
            options={{
                tabBarLabel: 'Heatmap',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="gps-fixed" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen 
            name ="Schedule" 
            tabBarLabel= "Schedule" 
            component = {ScheduleScreen}
            options={{
                tabBarLabel: 'Heatmap',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="schedule" color={color} size={26} />
                ),
              }}/>
        </Tab.Navigator>
    )
}

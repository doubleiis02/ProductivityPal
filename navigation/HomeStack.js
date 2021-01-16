import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "../screens/HomeScreen.js";
import AddActivityScreen from "../screens/AddActivityScreen";
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
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen name ="Heatmap"
            component = {HeatmapScreen}
            options={{
                tabBarLabel: 'Heatmap',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="gps-fixed" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen 
            name ="Schedule" 
            component = {ScheduleScreen}
            options={{
                tabBarLabel: 'Schedule',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="schedule" color={color} size={26} />
                ),
              }}/>

            <Tab.Screen 
            name ="AddActivity" 
            component = {AddActivityScreen}
            options={{
                tabBarLabel: 'AddActivity',
                tabBarIcon: ({ color }) => (
                  <FeatherIcons name="activity" color={color} size={26} />
                ),
              }}/>
        </Tab.Navigator>
    )
}

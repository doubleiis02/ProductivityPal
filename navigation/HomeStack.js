import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "../screens/HomeScreen.js";
import AddActivityScreen from "../screens/AddActivityScreen";
import HeatmapStack from "./HeatmapStack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ScheduledStack from "./ScheduledStack";



const Tab = createMaterialBottomTabNavigator();

export default function HomeStack(){
    return (
        <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: "#b3d0ff" }}
        tabBarOptions={{
          activeTintColor: '#000000',
          inactiveTintColor: "#adadad",
        }}>
            <Tab.Screen name ="Heatmap"
            component = {HeatmapStack}
            options={{
                tabBarLabel: 'Heatmap',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="gps-fixed" color={color} size={26} />
                ),
              }}/>

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

            <Tab.Screen 
            name ="Schedule" 
            component = {ScheduledStack}
            options={{
                tabBarLabel: 'Schedule',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="schedule" color={color} size={26} />
                ),
              }}/>

        </Tab.Navigator>
    )
}

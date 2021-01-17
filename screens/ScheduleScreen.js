import React, {useState, useEffect, useContext} from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import Constants from "expo-constants";
import {AuthContext} from "../navigation/AuthProvider";
import ScheduledItem from "./subcomponents/ScheduledItem";

export default function ScheduleScreen(props){
    const [scheduleTime, setScheduleTime] = useState(null);
    const [refreshing, setRefreshing] = React.useState(false);
    const [scheduleName, setScheduleName] = useState(null);
    const {user, } = useContext(AuthContext);

    const junkData = {
        scheduled: {
            item1: {
                name: "Mow the Lawn",
                timeScheduledMilitaryHr: 12,
                timeScheduledMin: 30,
                completion: false
            },
            item2: {
                name: "Do the Dishes",
                timeScheduledMilitaryHr: 12,
                timeScheduledMin: 30,
                completion: false
            },

            item3: {
                name: "Stretch Break!",
                timeScheduledMilitaryHr: 11,
                timeScheduledMin: 45,
                completion: true
            }
        }
    }

    const wait = (timeout) => {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }

    const onRefresh = React.useCallback(() => {
        //READ FROM DATABASE HERE
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
    }, []);
    

    //We would have removed from the field the database stuff 
    // function displaySchedule() {
    //     const arrayData = Object.entries(junkData.scheduled);
    //     arrayData.forEach(([key]) => {
    //         <ScheduledItem item={key}/>
    //     });
    // }
    const arrayData = Object.values(junkData.scheduled);
    console.log(arrayData);
    let displayedSchedule = arrayData.map((item,index) => {
        return(<ScheduledItem key = {index} item = {item}/>)
    });
    console.log(displayedSchedule);


    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }> 
                 
                <Text style = {styles.boldedTitleText}>Daily Scheduled Items</Text>
                <View style = {{display : "flex", justifyContent: "space-evenly", height: 500 }}>{displayedSchedule}</View>
                

                <TouchableOpacity 
                onPress = {() => props.navigation.navigate("AddActivity")}
                style= {styles.button}>
                <Text>Add A Scheduled Activity</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      
        flex: 1,
        backgroundColor: '#ffedd9',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
        textAlign: "center"
      },
      titleText: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 30,
        textAlign: "center"
    },
    boldedTitleText: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
        
    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%"
      },

    register: {
        display: "flex",
        flexDirection: "row",
        width: "70%"
    },

    registerInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "70%"
    },

    button: {
        alignItems: "center",
        backgroundColor: "#b3d0ff",
        padding: 20,
        borderRadius: 20
    }
  });
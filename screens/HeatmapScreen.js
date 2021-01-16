import React, {useState, useRef} from "react";
import { PanResponder, StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import WebView from "react-native-webview";

import Heatmap from "react-native-simpleheat";


export default function HeatmapScreen(props){
    const [heatmapData, setheatmapData] = useState([
        [94, 2, 76],
        [21, 71, 39],
        [59, 47, 95],
        [78, 1, 30],
        [2, 88, 16],
        [94, 16, 59],
        [99, 6, 67],
        [70, 40, 95],
        [64, 66, 3],
        [30, 35, 74],
        [82, 24, 70],
        [91, 44, 52],
        [10, 0, 31],
        [32, 20, 19],
        [92, 64, 79],
        [38, 97, 78],
        [50, 64, 92],
        [90, 15, 83],
        [40, 36, 13],
        [73, 47, 71],
        [40, 72, 87],
        [75, 73, 37],
        [79, 53, 22],
        [58, 63, 37],
        [80, 79, 5],
        [6, 48, 90],
        [41, 38, 8],
        [97, 2, 28],
        [72, 8, 94],
        [10, 13, 76],
        [4, 76, 35],
        [64, 53, 15],
        [18, 10, 89],
        [4, 99, 7],
        [57, 29, 62],
        [70, 7, 87],
        [9, 78, 84],
        [70, 81, 16],
        [68, 74, 8],
        [87, 15, 41],
        [19, 26, 54],
        [57, 51, 55],
        [37, 86, 37],
        [95, 13, 93],
        [29, 21, 45],
        [53, 9, 92],
        [83, 27, 63],
        [43, 19, 43],
        [11, 37, 29],
        [8, 10, 59]
        ]);

        const [gradient, setGradient] = useState({0.4: 'blue', 0.65: 'lime', 1: 'red'});
        
        const {heatmap} = useRef(null);
        console.log("Heatmap Data:"+ {heatmapData});

    return (
        
        <View style = {styles.container}>
            <Text>This is our Heatmap Screen!</Text>
            <Heatmap
            ref={heatmap}
            WebView = {WebView}
            data = {heatmapData}
            gradient = {gradient}
            alpha = {0.5}
            />
            
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

    register: {
        display: "flex",
        flexDirection: "row",
        width: "70%"
    },

    registerInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "70%"
    }
  });
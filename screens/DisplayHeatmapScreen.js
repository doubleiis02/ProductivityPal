import React, {useEffect, useState} from 'react';
import {StyleSheet, ImageBackground, Image}from "react-native";
import {
  PanResponder,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import WebView from 'react-native-webview';
 
import Heatmap from 'react-native-simpleheat';
 
export default function DisplayHeatmapScreen(props){
  
  const [gradient, setGradient] = useState(undefined);

    const {heatmapImage, slicedHeatmapData} = props.route.params;
    console.log("heatmapImage: " + heatmapImage);
    return (
      <View
        style={{
           // <-- HeatMap is transparent, so you can view what's underneath.
           backgroundColor: "transparent",
          flex: 1,
        }}
      >
        <ImageBackground uri = {heatmapImage} style ={styles.backgroundImage}>
          <Heatmap
            WebView={WebView} // <-- Implementors must define the <WebView/> component!
            data={slicedHeatmapData}
            
            gradient={gradient}
            alpha={0.5} // <-- Control transparency for overlays!
            
          />

          <TouchableOpacity 
                  onPress = {() => props.navigation.navigate("HeatmapSettings")}
                  style= {styles.button}>
                  <Text>Back to Heatmap Settings</Text>
                  </TouchableOpacity>
        </ImageBackground>
      </View>

    );
  

}

const styles = StyleSheet.create({
   button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20,

    },
    smallButton: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})


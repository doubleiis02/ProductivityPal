import React from 'react';
import {
  PanResponder,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import WebView from 'react-native-webview';
 
import Heatmap from 'react-native-simpleheat';
 
export default class App extends React.Component {
  state = {
    // XXX: This is a simple example of taking multi-touch gestures from the PanResponder
    //      and using these to drop points on the heatmap.
    panResponder: PanResponder
      .create(
        {
          onStartShouldSetPanResponder: () => true,
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: ({ nativeEvent }) => {
            const { changedTouches } = nativeEvent;
            const { heatmap } = this.refs;
            this.setState(
              {
                data: [
                  ...this.state.data,
                  ...changedTouches
                    .map(
                      ({ locationX, locationY }) => {
                        return [
                          locationX,
                          locationY,
                          10,
                        ];
                      },
                    ),
                ],
              },
            );
          },
          onPanResponderRelease: () => this.setState({
            data: [],
          }),
        },
      ),
    data: [],
    gradient: undefined, // <-- Here you could use a custom gradient.
  };
  render() {
    const {
      panResponder,
      data,
      gradient,
    } = this.state;
    return (
      <View
        style={{
          backgroundColor: 'purple', // <-- HeatMap is transparent, so you can view what's underneath.
          flex: 1,
        }}
      >
        <Heatmap
          ref="heatmap"
          {...panResponder.panHandlers} // <-- extraProps are delegated to the containing <Animated.View/>
          WebView={WebView} // <-- Implementors must define the <WebView/> component!
          data={data}
          gradient={gradient}
          alpha={0.5} // <-- Control transparency for overlays!
        />
      </View>
    );
  }
}
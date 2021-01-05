import React from 'react';
import LottieView from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';

function HomeActivityIndicator({visible = false}) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/27276-loader.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    opacity: 0.8,
    width: '100%',
    zIndex: 1,
    height: '100%',
  },
});

export default HomeActivityIndicator;

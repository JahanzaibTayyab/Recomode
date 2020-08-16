import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';

import colors from '../../../config/colors';
function Pagination({index, currentindex}) {
  const opacity = interpolate(currentindex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentindex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={[styles.container, {opacity, transform: [{scale}]}]}>
      <Text></Text>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 6,
    height: 6,
    borderRadius: 4,
    margin: 4,
  },
});
export default Pagination;

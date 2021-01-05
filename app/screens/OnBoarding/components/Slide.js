// Slide conttent to show in On BoardScreen
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
import { SLIDE_HEIGHT, FONT_MEDIUM, FONT_SEMIBOLD, FONT_BOLD, FONT_BOLDITALIC, FONT_ITALIC } from '../../../config/Constant';

function Slide({ title, right, picture }) {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];

  return (
    <View style={styles.container}>
      <View style={(styles.titleContainer, { transform })}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width, overflow: 'hidden' },
  titleContainer: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 60,
    lineHeight: 80,
    fontFamily: FONT_SEMIBOLD,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default Slide;

// Slide conttent to show in On BoardScreen
import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

function Slide({title, right, picture}) {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.images} />
      </View>
      <View style={(styles.titleContainer, {transform})}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, width, overflow: 'hidden'},
  titleContainer: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignContent: 'center',
  },
  images: {
    ...StyleSheet.absoluteFillObject,
    //top:SLIDE_HEIGHT
    // paddingTop: 20,
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 80,
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
});

export default Slide;

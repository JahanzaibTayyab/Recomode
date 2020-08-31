import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../config/colors';

function AppButton({
  title,
  onPress,
  buttoncolor = 'primary',
  titlecolor = 'bitblue',
  width = '100%',
}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[buttoncolor]}, {width}]}
      onPress={onPress}>
      <Text style={[styles.text, {color: colors[titlecolor]}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.bitblue,
    fontSize: 15,
    fontFamily: 'SFProText-Regular',
    //textTransform: "uppercase",
    //fontWeight: "bold",
  },
});

export default AppButton;

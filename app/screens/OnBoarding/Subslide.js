import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../config/colors';
import Button from '../../components/Button'; // Call Button Component

function Subslide({subTitle, description, last, onPress}) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title={last ? "Let's get started" : 'Next'}
        buttoncolor={last ? 'primary' : 'secondary'} // condational renderind for button color
        titlecolor={last ? 'white' : 'bitblue'} //condational rendering for title on button
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  description: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    marginBottom: 40,
    lineHeight: 24,
    color: colors.bitblue,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'SFProText-Semibold',
    marginBottom: 12,
    lineHeight: 30,
    color: colors.bitblue,
  },
});
export default Subslide;

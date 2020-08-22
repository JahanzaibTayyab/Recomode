import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../../config/colors';
import Button from '../../../components/Button';

function Subslide({subTitle, description, last, onPress}) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title={last ? "Let's get started" : 'Next'}
        buttoncolor={last ? 'primary' : 'secondary'}
        titlecolor={last ? 'white' : 'bitblue'}
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
    bottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    marginBottom: 18,
    lineHeight: 20,
    color: 'rgba(12, 13, 52,0.7)',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'SFProText-Semibold',
    marginBottom: 12,
    lineHeight: 30,
    color: colors.bitblue,
    textAlign: 'center',
  },
});
export default Subslide;

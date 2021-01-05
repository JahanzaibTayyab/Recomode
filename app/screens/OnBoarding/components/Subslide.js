import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../../config/colors';
import Button from '../../../components/Button';
import { SLIDE_HEIGHT, FONT_MEDIUM, FONT_SEMIBOLD, FONT_BOLD, FONT_BOLDITALIC, FONT_ITALIC, FONT_Regular } from '../../../config/Constant';

function Subslide({ subTitle, description, last, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title={last ? "Let's get started" : 'Next'}
        buttoncolor={last ? 'primary' : 'lightGrey'}
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
    fontSize: 15,
    fontFamily: FONT_MEDIUM,
    marginBottom: 18,
    lineHeight: 20,
    color: colors.COLOR_BORDER,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontFamily: FONT_SEMIBOLD,
    marginBottom: 14,
    lineHeight: 30,
    color: colors.bitblue,
    textAlign: 'center',
  },
});
export default Subslide;

import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../config/colors';
import {
  FONT_Regular,
  FONT_SEMIBOLD,
  FONT_LIGHT,
  FONT_BOLD,
} from '../../config/Constant';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerStep: {fontFamily: FONT_LIGHT, fontSize: 8, color: colors.primary},
  headerLight: {
    fontFamily: FONT_LIGHT,
    fontSize: 8,
    color: colors.lightGrey,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 40,
  },
});

export default styles;

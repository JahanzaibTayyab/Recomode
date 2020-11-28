import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';
const { height } = Dimensions.get('window');

import { BORDER_RADIUS, FONT_BOLD, FONT_MEDIUM, FONT_Regular, FONT_SEMIBOLD, FONT_SEMIBOLDAlter } from '../../config/Constant';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentdata: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
    bottom: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FONT_MEDIUM,
    lineHeight: 16,
    color: colors.COLOR_BORDER,
    textAlign: 'center',
  },
  footerContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS,
    paddingTop: 25,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  slide: {
    height: 0.47 * height,
    borderBottomRightRadius: BORDER_RADIUS,
    backgroundColor: 'white',
  },
  subtitle: {
    fontSize: 22,
    fontFamily: FONT_SEMIBOLD,
    marginBottom: 18,
    lineHeight: 30,
    color: colors.bitblue,
  },
  footer: {
    flex: 1,
  },
});
export default styles;

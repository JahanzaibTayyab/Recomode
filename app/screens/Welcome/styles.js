import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';
const { height } = Dimensions.get('window');

import { BORDER_RADIUS } from '../../config/Constant';
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
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    marginBottom: 18,
    lineHeight: 16,
    color: 'rgba(12, 13, 52,0.7)',
    textAlign: 'center',
  },
  footerContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS,
    paddingTop: 40,
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
    fontSize: 24,
    fontFamily: 'SFProText-Semibold',
    marginBottom: 12,
    lineHeight: 30,
    color: colors.bitblue,
  },
  footer: {
    flex: 1,
  },
});
export default styles;

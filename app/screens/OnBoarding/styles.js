import {StyleSheet} from 'react-native';

import {BORDER_RADIUS, SLIDE_HEIGHT} from '../../config/Constant';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footerContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS,
    paddingTop: 40,
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  slidepagination: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(100,200,300,0.5)',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    height: BORDER_RADIUS,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
});

export default styles;

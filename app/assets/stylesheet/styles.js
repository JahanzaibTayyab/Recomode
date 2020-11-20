import { StyleSheet, Platform } from 'react-native';

import { BORDER_RADIUS, SLIDE_HEIGHT, FONT_BOLD } from '../../config/Constant';
import colors from '../../config/colors';
import { SCREEN_WIDTH } from './../../config/Constant';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  segmentBarContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 105 : 190,
    borderRadius: 0,
  },
  segmentTabStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: "100%"
  },
  activeSegtmentTabStyle: {
    borderBottomColor: colors.COLOR_FILLED,
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    width: "100%"
  },
  tabsContainerStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: 30,
    borderRadius: 0,
  },
  tabTextStyle: {
    fontFamily: FONT_BOLD,
    fontSize: 10,
    color: colors.COLOR_FILLED,
    opacity: 0.3,
  },
  activeTabTextStyel: {
    fontFamily: FONT_BOLD,
    fontSize: 10,
    color: colors.COLOR_FILLED,
    opacity: 1,
    width: "100%"
  },
});

export default styles;

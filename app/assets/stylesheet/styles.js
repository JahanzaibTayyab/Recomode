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
  modelCard: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: 'white',
    borderColor: colors.COLOR_BORDER,
    borderWidth: 0,
    shadowColor: colors.COLOR_FILLED,
    shadowOpacity: 0.9,
    //elevation: 70,
    shadowRadius: 40,
    shadowOffset: { width: 1, height: 50 },
    borderRadius: 20,
    overflow: "hidden"
  },
  modelInner: {
    position: "absolute",
    right: 10,
    top: -40,
    backgroundColor: 'white',
    borderColor: colors.COLOR_BORDER,
    borderWidth: 0,
    justifyContent: 'center',
    overflow: "hidden",
    backgroundColor: "transparent",
    width: 50,
    height: 100
  },
  modrlHeart: {
    width: 40, height: 40, borderRadius: 50, position: "absolute",
    right: -15, bottom: 3,
    top: -320,
    shadowColor: colors.COLOR_FILLED,
    shadowOpacity: 0.9,
    zIndex: 10,
    elevation: 5,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 50 },
    alignItems: "center", justifyContent: "center",
    backgroundColor: colors.bitblue
  },
  trendingShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  recentContainerShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default styles;

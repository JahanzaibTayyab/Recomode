import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {
  FONT_BOLD,
  FONT_SEMIBOLD,
  FONT_Regular,
  FONT_LIGHT,
  FONT_MEDIUM,
} from '../../../config/Constant';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.white,
  },
  head: {height: 40, backgroundColor: colors.onBoradingScreen1},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: colors.primary},
  row: {height: 35},
  headtext: {
    textAlign: 'center',
    fontFamily: FONT_SEMIBOLD,
    fontSize: 12,
    color: colors.black,
  },
  titletext: {
    textAlign: 'center',
    fontFamily: FONT_SEMIBOLD,
    fontSize: 12,
    color: colors.white,
  },
  text: {
    textAlign: 'center',
    fontFamily: FONT_Regular,
    fontSize: 12,
    color: colors.black,
  },
  endText: {
    marginTop: 10,
    fontFamily: FONT_LIGHT,
    fontSize: 12,
    color: colors.black,
    marginHorizontal: 10,
  },
  groupTitle: {
    marginTop: 10,
    fontFamily: FONT_BOLD,
    fontSize: 16,
    color: colors.black,
  },
  wieghtTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: FONT_SEMIBOLD,
    color: colors.black,
  },
});
export default styles;

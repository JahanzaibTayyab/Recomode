import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import { FONT_BOLD, FONT_SEMIBOLD, FONT_Regular, FONT_LIGHT, FONT_MEDIUM } from "../../config/Constant"
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  upperheader: { alignItems: 'center', margin: 10 },
  headertext: {
    color: colors.lightGrey,
    fontFamily: FONT_LIGHT,
    fontSize: 10,
  },
  headerinnertext: {
    color: colors.lightGrey,
    fontFamily: FONT_LIGHT,
    fontSize: 10,
  },
  headerinnertext2: {
    color: colors.primary,
    fontFamily: FONT_LIGHT,
    fontSize: 10,
  },
  headerDone: {
    color: colors.primary,
    fontFamily: FONT_MEDIUM,
    fontSize: 14,
    top: 10,
  },
  upperTitleheader: { alignItems: 'center', margin: 20 },
  genderText: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
  },
  checkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
  },
  checkText: {
    fontFamily: FONT_Regular,
    fontSize: 14,
    top: 7,
  },
});

export default styles;

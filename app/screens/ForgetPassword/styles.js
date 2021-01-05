import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import { FONT_Regular, FONT_SEMIBOLD, FONT_LIGHT, FONT_BOLD } from "../../config/Constant"

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bitblue },
  upperbox: {
    flex: 0.2,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
  },
  innerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 75,
  },
  contentdata: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 60,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  titleheader: {
    fontFamily: FONT_BOLD,
    fontSize: 24,
    color: colors.white,
    justifyContent: 'center',
  },
  subtitle: {
    fontFamily: FONT_Regular,
    textAlign: 'center',
    padding: 5,
    color: colors.medium,
    marginBottom: 20,
  },
  footer: { flex: 0.2, backgroundColor: colors.white },
  innerfooter: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderTopLeftRadius: 75,
  },
  icon: {
    width: 220 / 2.4,
    height: 190 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
});

export default styles;

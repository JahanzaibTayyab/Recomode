import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import { FONT_SEMIBOLD, FONT_MEDIUM, FONT_LIGHT, FONT_Regular } from "../../config/Constant"
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  content: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 75,
    justifyContent: 'center',
    padding: 15,
  },
  foteerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderTopLeftRadius: 75,
  },
  innerFooterbox: {
    flex: 0.1,
    backgroundColor: 'white',
  },
  innerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderBottomRightRadius: 75,
  },
  upperbox: {
    flex: 0.12,
    backgroundColor: 'white',
  },
  upperText: {
    flex: 1,
    paddingTop: 5,
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: FONT_Regular,
    fontSize: 12
  },
  userName: { fontFamily: FONT_SEMIBOLD, fontSize: 18, alignSelf: "center", textAlign: "center" },
  userEmail: {
    alignSelf: 'center',
    fontFamily: FONT_LIGHT,
    color: 'blue',
    fontSize: 12
  },
});

export default styles;

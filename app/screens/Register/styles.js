import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';
import { FONT_Regular, FONT_SEMIBOLD, FONT_LIGHT, FONT_BOLD } from "../../config/Constant"

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bitblue,
  },
  upperbox: {
    flex: 0.19,
    backgroundColor: colors.white,
    //justifyContent: 'flex-end',
  },
  innerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderBottomRightRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentdata: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 60,
    justifyContent: 'flex-end',
    padding: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  titleheader: {
    fontFamily: FONT_BOLD,
    fontSize: 24,
    color: colors.white,
    justifyContent: 'flex-end',
  },
  subtitle: {
    fontFamily: FONT_Regular,
    textAlign: 'center',
    padding: 5,
    color: colors.medium,
    marginBottom: 20,
  },
  footerdata: {
    //flex: 0.1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 16,
    top: 10,
  },
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
  footertitle: {
    fontFamily: FONT_Regular,
    textAlign: 'center',
    color: colors.white,
  },
  logocontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 10,
    marginHorizontal: 20,
  },
  logoinnercontainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
    padding: 5,
    margin: 10,
    bottom: 10,
  },
  registercontainer: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    margin: 10,
  },
  logoimage: { width: '100%', height: 50 },
  footer: { flex: 0.2, backgroundColor: colors.white },
  innerfooter: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderTopLeftRadius: 75,
  },
  icon: {
    width: '100%',
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
});

export default styles;

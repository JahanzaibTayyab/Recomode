import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH, FONT_BOLD, FONT_SEMIBOLD, FONT_Regular, FONT_LIGHT } from "../../config/Constant"

const styles = StyleSheet.create({
  container: { flex: 1 },
  boxcontainer: {
    flexDirection: 'row',
    margin: 10,
    top: 5,
    justifyContent: 'space-between',
    //marginTop: 80,
  },
  box: {
    alignSelf: 'center',
    width: 90,
    height: 100,
    margin: 5,
    borderWidth: 1,
    justifyContent: 'center',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderColor: "#0a3012",
  },
  boxinnertext: {
    alignSelf: 'center',
    alignContent: 'center',
    fontFamily: FONT_SEMIBOLD,
    fontSize: 14,
    top: 5,
  },
  logoinnercontainer: {
    overflow: 'hidden',
  },
  logoimage: {
    alignSelf: 'center',
    width: '70%',
    height: 90,
    //top: 5,
  },
  upperheader: { alignItems: 'center', margin: 10 },
  headertext: {
    color: colors.primary,
    fontFamily: FONT_LIGHT,
    fontSize: 10,
  },
  headerinnertext: {
    color: colors.lightGrey,
    fontFamily: FONT_LIGHT,
    fontSize: 10,
  },
  headerinnertext2: {
    color: colors.lightGrey,
    fontFamily: FONT_LIGHT,
    fontSize: 10,
  },
  upperGenderheader: { alignItems: 'center', margin: 10 },
  genderText: {
    fontFamily: FONT_BOLD,
    fontSize: 20,
  },
  AgeText: {
    fontFamily: FONT_BOLD,
    fontSize: 15,
    marginRight: 15,
  },
  AgeText2: {
    fontFamily: FONT_SEMIBOLD,
    fontSize: 16,
    marginRight: 15,
  },
  colorText: {
    fontFamily: FONT_BOLD,
    fontSize: 15,
    marginTop: 20,
  },
  colorbox: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  blurViewStyles: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  containerOnModal: {
    width: "100%",
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 1,
    shadowRadius: 10,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 1 },
    height: 389,
  },
  emojiView: {
    borderRadius: 20,
    borderColor: colors.bitblue,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 2,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 50 },
    height: 82,
    width: 88,
    marginLeft: 15,
    alignSelf: "center",
    marginBottom: 5,
    marginTop: 10,
    backgroundColor: "#dbdbdb"
  }

});


export default styles;

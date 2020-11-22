import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import { FONT_BOLD, FONT_SEMIBOLD, FONT_Regular, FONT_LIGHT, FONT_MEDIUM } from "../../config/Constant"

const styles = StyleSheet.create({
  boxcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: 80,
  },
  box: {
    width: 70,
    height: 70,
    margin: 10,
    justifyContent: 'center',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  boxinnertext: {
    alignSelf: 'center',
    alignContent: 'center',
    color: colors.white,
    fontFamily: FONT_SEMIBOLD,
    fontSize: 35,
    top: 5,
  },
  boxoutertext: {
    alignSelf: 'center',
    alignContent: 'center',
    top: 25,
    fontFamily: FONT_MEDIUM,
    fontSize: 12
  },
  conatiner: { flex: 1, backgroundColor: '#fff' },
  footertext: { textAlign: 'center', fontFamily: FONT_Regular, fontSize: 13 },
  footerbutton: { flex: 1, justifyContent: 'space-evenly', alignItems: 'center' },
  header: { backgroundColor: 'white', alignItems: 'center', margin: 20 },
  headertext: { color: colors.primary, fontFamily: FONT_MEDIUM, fontSize: 12 },
  sizecontainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  sizeheader: { alignItems: 'center' },
  sizeheadertitle: { fontFamily: FONT_BOLD, fontSize: 14 },
});
export default styles;

import {StyleSheet} from 'react-native';

import colors from '../../config/colors';

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
    fontFamily: 'SFProText-Regular',
    fontWeight: 'bold',
    fontSize: 35,
    top: 5,
  },
  boxoutertext: {
    alignSelf: 'center',
    alignContent: 'center',
    top: 25,
    fontFamily: 'SFProText-Regular',
  },
  conatiner: {flex: 1, backgroundColor: '#fff'},
  footertext: {textAlign: 'center', fontFamily: 'SFProText-Regular'},
  footerbutton: {flex: 1, justifyContent: 'space-evenly', alignItems: 'center'},
  header: {backgroundColor: 'white', alignItems: 'center', margin: 20},
  headertext: {color: colors.primary, fontFamily: 'SFProText-Regular'},
  sizecontainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  sizeheader: {alignItems: 'center'},
  sizeheadertitle: {fontFamily: 'SFProText-Bold'},
});
export default styles;

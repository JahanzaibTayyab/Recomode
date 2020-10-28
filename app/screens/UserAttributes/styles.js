import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
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
    borderColor: colors.primary,
  },
  boxinnertext: {
    alignSelf: 'center',
    alignContent: 'center',
    fontFamily: 'SFProText-Semibold',
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
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
  },
  headerinnertext: {
    color: colors.lightGrey,
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
  },
  headerinnertext2: {
    color: colors.lightGrey,
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
  },
  upperGenderheader: { alignItems: 'center', margin: 10 },
  genderText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 20,
  },
  AgeText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 15,
    marginRight: 15,
  },
  AgeText2: {
    fontFamily: 'SFProText-Bold',
    fontSize: 16,
    marginRight: 15,
  },
  colorText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 15,
    marginTop: 20,
  },
  colorbox: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});

export default styles;

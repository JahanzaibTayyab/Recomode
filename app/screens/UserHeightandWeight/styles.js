import {StyleSheet} from 'react-native';

import colors from '../../config/colors';
const styles = StyleSheet.create({
  container: {flex: 1},
  upperheader: {alignItems: 'center', margin: 10},
  headertext: {
    color: colors.lightGrey,
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
  },
  headerinnertext: {
    color: colors.lightGrey,
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
  },
  headerinnertext2: {
    color: colors.primary,
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
  },
  headerDone: {
    color: colors.primary,
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    top: 10,
  },
  upperTitleheader: {alignItems: 'center', margin: 20},
  genderText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 18,
  },
  checkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
  },
  checkText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    top: 7,
  },
});

export default styles;

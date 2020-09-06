import {StyleSheet} from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.bitblue},
  container1: {flex: 1, backgroundColor: colors.bitblue, position: 'absolute'},
  upperbox: {flex: 0.1, backgroundColor: colors.white},
  innerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
  },
  contentdata: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: 'center',
    padding: 20,
  },
  titleheader: {fontFamily: 'SFProText-Bold', fontSize: 20, marginBottom: 20},
  subtitle: {
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
    padding: 5,
    color: colors.medium,
    marginBottom: 20,
  },
  footer: {flex: 0.1, backgroundColor: colors.white},
  innerfooter: {flex: 1, backgroundColor: colors.bitblue},
  icon: {
    width: 220 / 2.4,
    height: 190 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
});

export default styles;

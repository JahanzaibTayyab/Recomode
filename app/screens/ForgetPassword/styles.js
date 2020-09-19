import {StyleSheet} from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.bitblue},
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
    fontFamily: 'SFProText-Bold',
    fontSize: 22,
    color: colors.white,
    justifyContent: 'center',
  },
  subtitle: {
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
    padding: 5,
    color: colors.medium,
    marginBottom: 20,
  },
  footer: {flex: 0.2, backgroundColor: colors.white},
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

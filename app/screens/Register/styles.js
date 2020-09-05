import {StyleSheet} from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.bitblue},
  upperbox: {flex: 0.1, backgroundColor: colors.white},
  innerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderBottomRightRadius: 75,
  },
  contentdata: {
    flex: 0.9,
    backgroundColor: colors.white,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: 'center',
    padding: 20,
  },
<<<<<<< HEAD
  contentdata2: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',

    paddingBottom: 100,
  },
  titlecontainer: {flex: 1, alignItems: 'center'},
=======
>>>>>>> 2f26770dd22c8695404cb0c3f5ef47a2164ed3d1
  titleheader: {fontFamily: 'SFProText-Bold', fontSize: 20},
  subtitle: {
    fontFamily: 'SFProText-Regular',
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
  },
  footertitle: {
    fontFamily: 'SFProText-Regular',
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
  logoimage: {width: '100%', height: 50},
  footer: {flex: 0.2, backgroundColor: colors.white},
  innerfooter: {flex: 1, backgroundColor: colors.bitblue},
});

export default styles;

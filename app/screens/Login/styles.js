import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.light},
  upperbox: {flex: 0.1, backgroundColor: colors.white},
  innerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderBottomRightRadius: 75,
  },
  content: {flex: 0.9, backgroundColor: colors.bitblue},
  contentdata: {
    position: 'absolute',
    backgroundColor: colors.white,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: 'flex-start',
    padding: 15,
    paddingBottom: 40,
  },
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
  titleheader: {fontFamily: 'SFProText-Bold', fontSize: 20},
  subtitle: {
    flex: 1,
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
    padding: 5,
    color: colors.medium,
  },
  footerdata: {
    //flex: 0.1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  footertitle: {
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
    color: colors.white,
  },
  logocontainer: {
    flex: 1,
    // position: 'absolute',
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
  footer: {
    flex: 0.2,
    backgroundColor: colors.white,
    // position: 'absolute',
    // alignSelf: 'center',
    // top: height / 1.1,
    // width: '100%',
    // height: undefined,
  },
  innerfooter: {flex: 1, backgroundColor: colors.bitblue},
});

export default styles;

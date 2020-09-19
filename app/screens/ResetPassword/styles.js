import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../config/colors';

const {width, height} = Dimensions.get('window');

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
    borderBottomLeftRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentdata: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 75,
    borderBottomLeftRadius: 60,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    overflow: 'hidden',
    // marginTop: 40,
  },
  titleheader: {
    fontFamily: 'SFProText-Bold',
    fontSize: 25,
    color: colors.white,
    justifyContent: 'flex-end',
  },
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
  registercontainer: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    margin: 10,
  },
  logoimage: {width: '100%', height: 50},
  footer: {flex: 0.2, backgroundColor: colors.white},
  innerfooter: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderTopRightRadius: 75,
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

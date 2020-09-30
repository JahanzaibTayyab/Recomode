import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
// import {useNetInfo} from '@react-native-community/netinfo';

import colors from '../config/colors';
import Text from './Text';

function OfflineNotice(props) {
  // const netInfo = useNetInfo();

  // if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
  return (
    <LottieView
      autoPlay
      loop={true}
      source={require('../assets/animations/NoInternet.json')}
    />
  );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#eb291e',
    height: 35,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;

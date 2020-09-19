import React from 'react';
import {StyleSheet} from 'react-native';
import {ic_facebook, ic_google} from '../screens/helper/constants';

import {View, Image, TouchableWithoutFeedback} from 'react-native';
const SocialContainer = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.logocontainer}>
        <View style={styles.logoinnercontainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('FaceBook');
            }}>
            <Image
              resizeMode="contain"
              source={ic_facebook}
              style={styles.logoimage}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.logoinnercontainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('Google');
            }}>
            <Image
              resizeMode="contain"
              source={ic_google}
              style={styles.logoimage}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SocialContainer;
const styles = StyleSheet.create({
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
});

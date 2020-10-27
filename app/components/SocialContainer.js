import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import {ic_facebook, ic_google} from '../screens/helper/constants';

import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';

const SocialContainer = (props) => {

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '370194722565-mj88es6c9437pkfu0u2sjc6tnev19qi9.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //hostedDomain: '', // specifies a hosted domain restriction
      //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      //accountName: '', // [Android] specifies an account name on the device that should be used
      //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
},[]);

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo)
    //this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
    console.log(error)
  }
};



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
              signIn()
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

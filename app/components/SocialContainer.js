import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ic_facebook, ic_google } from '../screens/helper/constants';

import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

const SocialContainer = (props) => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '370194722565-h6tpo724fki9q3m151fge4cuesqgbgpe.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      var idToken = userInfo.idToken;
      console.log(idToken);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Sinf in cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sinf in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Sinf in service not avaiable');
      } else {
        console.log(error);
        console.log(error.code);
      }
    }
  }
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const { accessToken } = data
    initUser(accessToken)
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  const initUser = (token) => {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' + token)
      .then((response) => {
        response.json().then((json) => {
          const ID = json.id
          console.log("ID " + ID);

          const EM = json.email
          console.log("Email " + EM);

          const FN = json.first_name
          console.log("First Name " + FN);
        })
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK')
      })
  }


  return (
    <TouchableWithoutFeedback>
      <View style={styles.logocontainer}>
        <View style={styles.logoinnercontainer}>
          <TouchableWithoutFeedback
            onPress={(() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!')))}>
            <Image
              resizeMode="contain"
              source={ic_facebook}
              style={styles.logoimage}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.logoinnercontainer}>
          <TouchableWithoutFeedback
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
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
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
    padding: 5,
    margin: 10,
    bottom: 10,
  },
  logoimage: { width: '100%', height: 50 },
});

import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ic_facebook, ic_google } from '../screens/helper/constants';

import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AccessToken, LoginManager } from 'react-native-fbsdk';


import routes from "../navigation/routes"

const SocialContainer = (props) => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '423179659423-m4qj7qi6no4o72frt7hht3h617rf63vv.apps.googleusercontent.com',
    });
  }, []);

  const _saveFileStore = async (data, id) => {
    const userData = data;
    await firestore()
      .collection('users')
      .doc(id)
      .set(data)
      .then(() => {
        userData['id'] = id;
        props.navigation.navigate(routes.TAKEIMAGE, { userData });
      }).catch(error => {
        alert(error)
      })
  }

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken, user } = await GoogleSignin.signIn();
    console.log(user)
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          email: user.email,
          fullName: user.name
        };
        //save the data in file store
        _saveFileStore(data, uid)
      })
      .catch(error => {
        alert(error)
      })
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
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // Sign-in the user with the credential
    auth().signInWithCredential(facebookCredential)
      .then((response) => {
        const uid = response.user.uid
        var fbdata = initUser(accessToken)
        const data = {
          fullName: fbdata.pop(),
          email: fbdata.pop(),
        };
        //save the data in file store
        _saveFileStore(data, uid)
      })
      .catch(error => {
        alert(error)
      })
  }
  const initUser = (token) => {
    var data = [];
    fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' + token)
      .then((response) => {
        response.json().then((json) => {
          const ID = json.id
          console.log("ID " + ID);
          const EM = json.email
          const FN = json.first_name
          data.push(EM)
          data.push(FN)
        })
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK')
      })
    return data
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
            onPress={() => onGoogleButtonPress()}>
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
  logoimage: { width: '100%', height: 50 },
});

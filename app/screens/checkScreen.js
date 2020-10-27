import React from 'react';
import {View} from 'react-native';
import {f, databse, auth} from '../config/config';

import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
rnf
export default function checkScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
     <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
    </View>
  );
}

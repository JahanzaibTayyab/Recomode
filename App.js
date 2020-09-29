/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// import AuthNavigator from './app/navigation/AuthNavigator';
// import Welcome from './app/screens/Welcome';
// import Drawer from './app/screens/Drawer';
import navigationTheme from './app/navigation/navigationTheme';
import DrawerNavigator from './app/navigation/DrawerNavigator';
import Favorite from './app/screens/FavoriteOutfits';
// import FavoriteNavigator from './app/navigation/FavoriteNavigator';
import Height from './app/screens/Height';
import Check from './app/screens/checkScreen';
import TakeImage from './app/screens/TakeImage';
import AuthNavigator from './app/navigation/AuthNavigator';
import Welcome from './app/screens/Welcome';
import Register from './app/screens/Register';
import Login from './app/screens/Login';
import ForgetPassword from './app/screens/ForgetPassword';
import EnterCode from './app/screens/EnterCode';
import ResetPassword from './app/screens/ResetPassword/ResetPasswordView';
import UserAttributes from './app/screens/UserAttributes';
import HeightandWeight from './app/screens/UserHeightandWeight';

import ImageNavigator from './app/navigation/ImageNavigator';

// import ChangePassword from './app/screens/ChangePassword';
// import ChangePasswordView from './app/screens/ChangePassword/ChangePasswordView';

// import Register from './app/screens/Register';
//import RegisterScrenn from './app/screens/Register';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator /> 
        <DrawerNavigator />
         <FavoriteNavigator />  */}
        <ImageNavigator />
      </NavigationContainer>
      {/* <Welcome />
      <Drawer /> */}
      {/* <Favorite /> */}
      {/* <Height /> */}
      {/* <Check /> */}
      {/* <TakeImage /> */}
      {/* <UserAttributes /> */}
      {/* <HeightandWeight /> */}
      {/* <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer> */}
      {/* <Welcome /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <ForgetPassword /> */}
      {/* <EnterCode /> */}
      {/* <Text>Mango</Text> */}
      {/* <ResetPassword /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

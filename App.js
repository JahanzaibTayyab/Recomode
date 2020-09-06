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

import AuthNavigator from './app/navigation/AuthNavigator';
import Welcome from './app/screens/Welcome';
import Register from './app/screens/Register';
import Login from './app/screens/Login';
import ForgetPassword from './app/screens/ForgetPassword';
import EnterCode from './app/screens/EnterCode';

// import Register from './app/screens/Register';
//import RegisterScrenn from './app/screens/Register';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer> */}
      {/* <Welcome /> */}
      <Register />
      {/* <Login /> */}
      {/* <ForgetPassword /> */}
      {/* <EnterCode /> */}
      {/* <Text>Mango</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

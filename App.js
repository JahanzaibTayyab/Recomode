/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import Welcome from './app/screens/Welcome';
import Drawer from './app/screens/Drawer';
import navigationTheme from './app/navigation/navigationTheme';
import DrawerNavigator from './app/navigation/DrawerNavigator';
import Favourite from './app/screens/FavouriteOutfits';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
        <DrawerNavigator />
      </NavigationContainer> */}
      {/* <Welcome />
      <Drawer /> */}
      <Favourite />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

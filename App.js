/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import SplashScreen from 'react-native-splash-screen'
import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import HomeNavigation from './app/navigation/HomeNavigation';
import AuthContext from './app/auth/context';
import OfflineNotice from './app/components/OfflineNotice';
import ResetPassword from './app/screens/ResetPassword';
import UserHeightandWeight from "./app/screens/Height"
import ShirtNavigator from "./app/navigation/ShirtsNavigation"
import PantNavigator from "./app/navigation/PantsNavigation"
import HeightView from "./app/screens/Height"

import CheckScreen from './app/screens/checkScreen';
import ImageNavigator from './app/navigation/ImageNavigator';
import UserAttributesContainer from './app/screens/UserAttributes';
import { YellowBox, Platform, StatusBar } from 'react-native';
import Header from './app/components/Header';
import ShoesScreen from "./app/screens/Shoes/NokeShoesViewController"
import authStorage from "./app/auth/storage";
import ShoesNavigation from "./app/navigation/ShoesNavigation"
import Nav from './app/components/Nav';
import Profile from "./app/screens/Profile"

console.disableYellowBox = true

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(true);
  const [hideSplash, setHideSplash] = React.useState(false)

  const restoreUser = async () => {
    await authStorage.getUser().then((user1) => {
      setUser(user1)
    })

  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHideSplash(true);
  //   }, 5000); // amount of time the splash is shown from the time component is rendered
  // }, []);
  useEffect(() => {
    // if (!hideSplash) {
    //   restoreUser()
    // }
    // hideSplash && 
    SplashScreen.hide();
  }, []);





  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (isReady) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (isReady) return null;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <HomeNavigation /> : <HomeNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

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

import CheckScreen from './app/screens/checkScreen';
import ImageNavigator from './app/navigation/ImageNavigator';
import UserAttributesContainer from './app/screens/UserAttributes';
import { YellowBox, Platform, StatusBar } from 'react-native';

import authStorage from "./app/auth/storage";
import constants from "./app/assets/stylesheet/Constants"
import { Provider } from "react-redux";
import store from "./app/redux/store/configureStore";
import StripePayment from "./app/screens/Cart/PaymentMethod/StripePayment"

console.disableYellowBox = true

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(true);
  const [hideSplash, setHideSplash] = React.useState(false)

  const restoreUser = async () => {
    await authStorage.getJSONFromUserDefaults(constants.KEY_USERINFO).then((value) => {
      console.log(JSON.stringify(value))
      if (value) {
        setUser(value)
      }
    })
  };

  useEffect(() => {
    setTimeout(() => {
      setHideSplash(true);
    }, 5000); // amount of time the splash is shown from the time component is rendered
  }, []);
  useEffect(() => {
    if (!hideSplash) {
      restoreUser()
    }
    hideSplash &&
      SplashScreen.hide();
  }, []);
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (isReady) setIsReady(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);



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
    <Provider store={store}>
      <AuthContext.Provider value={{ user, setUser }}>
        {/* <OfflineNotice /> */}
        <NavigationContainer theme={navigationTheme}>
          {user ? <HomeNavigation /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
    // <CategoriesScreen />
   // <StripePayment />
  );
}

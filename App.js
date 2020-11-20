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

import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import HomeNavigation from './app/navigation/HomeNavigation';
import AuthContext from './app/auth/context';
import OfflineNotice from './app/components/OfflineNotice';
import ResetPassword from './app/screens/ResetPassword';
import UserHeightandWeight from "./app/screens/Height"


import CheckScreen from './app/screens/checkScreen';
import ImageNavigator from './app/navigation/ImageNavigator';
import UserAttributesContainer from './app/screens/UserAttributes';
import { YellowBox } from 'react-native';
import Header from './app/components/Header';
import ShirtsViewController from './app/screens/Shirts/ShirtViewController';
console.disableYellowBox = true

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(true);

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (isReady) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (isReady) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }
  return (
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <OfflineNotice />
    //   <NavigationContainer theme={navigationTheme}>
    //     {user ? <HomeNavigation /> : <AuthNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
    // <UserHeightandWeight />
    // <CheckScreen />
    //  <ImageNavigator />
    // <UserAttributesContainer />
    // <Header />
    <ShirtsViewController />
  );
}

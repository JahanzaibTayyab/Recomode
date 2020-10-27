/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import HomeNavigation from './app/navigation/HomeNavigation';
import AuthContext from './app/auth/context';
import OfflineNotice from './app/components/OfflineNotice';
import ResetPassword from './app/screens/ResetPassword';

import CheckScreen from './app/screens/checkScreen';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  return (
    <AuthContext.Provider value={{user, setUser}}>
       {/* <OfflineNotice /> */}
    <NavigationContainer theme={navigationTheme}>
    {user?<HomeNavigation/>:<AuthNavigator />}
    </NavigationContainer>
    </AuthContext.Provider>
    // <CheckScreen/>
  );
}

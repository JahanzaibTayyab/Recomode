import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardingScreen from '../screens/OnBoarding';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ForgetPasswordScreen from '../screens/ForgetPassword';
import ResetScreen from '../screens/ResetPassword';
import EnterCodeScreen from '../screens/EnterCode';
import TakeImageScreen from '../screens/TakeImage';
import UserAttributesScreeen from '../screens/UserAttributes';
import UserHeightandWeightScreen from '../screens/UserHeightandWeight';
import HeightScreen from '../screens/Height';
import HomeScreen from './HomeNavigation';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OnBoarding"
      component={OnBoardingScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Forgetpassword"
      component={ForgetPasswordScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Reset"
      component={ResetScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Code"
      component={EnterCodeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="TakeImage"
      component={TakeImageScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="UserAttributes"
      component={UserAttributesScreeen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="UserHeightAndWeight"
      component={UserHeightandWeightScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Height"
      component={HeightScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: true}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardingScreen from '../screens/OnBoarding';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ForgetPasswordScreen from '../screens/ForgetPassword';
import ResetScreen from '../screens/ResetPassword';
import EnterCodeScreen from '../screens/EnterCode';

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
  </Stack.Navigator>
);

export default AuthNavigator;

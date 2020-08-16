import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoarding from '../screens/OnBoarding';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OnBoarding"
      component={OnBoarding}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

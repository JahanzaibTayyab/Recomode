import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoarding from '../screens/OnBoarding';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={OnBoarding}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

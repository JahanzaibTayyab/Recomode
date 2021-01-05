import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TakeImageScreen from '../screens/TakeImage';
import UserAttributesScreeen from '../screens/UserAttributes';
import UserHeightandWeightScreen from '../screens/UserHeightandWeight';
import HeightScreen from '../screens/Height';
import HomeScreen from './HomeNavigation';

const Stack = createStackNavigator();

const ImageNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TakeImage">
      <Stack.Screen
        name="TakeImage"
        component={TakeImageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserAttributes"
        component={UserAttributesScreeen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserHeightAndWeight"
        component={UserHeightandWeightScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Height"
        component={HeightScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default ImageNavigator;

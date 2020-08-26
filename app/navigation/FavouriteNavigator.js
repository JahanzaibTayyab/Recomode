import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FavouriteScreen from '../screens/FavouriteOutfits';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Favourite"
      component={FavouriteScreen}
      options={{headerShown: true}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

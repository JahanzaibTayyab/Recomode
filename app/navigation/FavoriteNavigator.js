import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FavoriteScreen from '../screens/FavoriteOutfits';

const Stack = createStackNavigator();

const FavoriteNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{headerShown: true}}
    />
  </Stack.Navigator>
);

export default FavoriteNavigator;

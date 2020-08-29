import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FavoriteScreen from '../screens/FavoriteOutfits';

const Stack = createStackNavigator();

const FavoriteNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Favorites"
      component={FavoriteScreen}
      options={{
        title: 'FAVORITE OUTFITS',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          // fontWeight: 'bold',
          fontFamily: 'SFProText-Bold',
          justifyContent: 'center',
          alignSelf: 'center',
        },
      }}
    />
  </Stack.Navigator>
);

export default FavoriteNavigator;

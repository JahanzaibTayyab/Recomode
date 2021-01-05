import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FavoriteNavigator from './FavoriteNavigator';
const Tab = createMaterialTopTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Male" component={FavoriteNavigator} />
      <Tab.Screen name="Settings" component={FavoriteNavigator} />
    </Tab.Navigator>
  );
}

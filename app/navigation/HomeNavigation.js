import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import FavoriteNavigator from './FavoriteNavigator';
import Height from './TabNavigation';
//import Check from '../screens/check';

import DrawerContent from '../screens/Drawer';
import BootomTabNavigation from './BootomTabNavigation';


const Drawer = createDrawerNavigator();

function HomeNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={BootomTabNavigation} />
      <Drawer.Screen name="Favorites" component={FavoriteNavigator} />
      <Drawer.Screen name="Height" component={Height} />
    </Drawer.Navigator>
  );
}
export default HomeNavigator;

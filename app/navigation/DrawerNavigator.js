import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './HomeNavigation';
import FavouriteNavigator from './FavouriteNavigator';
//import Check from '../screens/check';

import DrawerContent from '../screens/Drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Favourite" component={FavouriteNavigator} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;

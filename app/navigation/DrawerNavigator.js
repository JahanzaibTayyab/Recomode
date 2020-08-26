import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './HomeNavigation';
import FavoriteNavigator from './FavoriteNavigator';
//import Check from '../screens/check';

import DrawerContent from '../screens/Drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Favorites" component={FavoriteNavigator} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;

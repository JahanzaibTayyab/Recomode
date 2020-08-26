import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import OnBoardingScreen from '../screens/OnBoarding';
import WelcomeScreen from '../screens/Welcome';
//import Check from '../screens/check';

import DrawerContent from '../screens/Drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Data" component={Check} />
      <Drawer.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;

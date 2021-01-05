import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import FavoriteNavigator from './FavoriteNavigator';
import SizeChartScreen from '../screens/DrawerNavigartorViewScreen/SizesViewController/SizesViewController';
import SizeMeasuremntConatinerScreen from '../screens/DrawerNavigartorViewScreen/SizesViewController/SizeMeasurementController';
import RecommendColorsScreen from '../screens/DrawerNavigartorViewScreen/RecomendatedColor';
import ProfileViewController from '../screens/DrawerNavigartorViewScreen/ProfileViewController/ProfileViewController';

import DrawerContent from '../screens/Drawer';
import BootomTabNavigation from './BootomTabNavigation';

const SizeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SizeStackScreen = ({navigation}) => (
  <SizeStack.Navigator initialRouteName={'Height'}>
    <SizeStack.Screen
      name="Height"
      component={SizeChartScreen}
      options={{headerShown: false}}
    />
    <SizeStack.Screen
      name="MeasureHeight"
      component={SizeMeasuremntConatinerScreen}
      options={{headerShown: false}}
    />
  </SizeStack.Navigator>
);
const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator initialRouteName={'Profile'}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileViewController}
      options={{headerShown: false}}
    />
  </ProfileStack.Navigator>
);
const Drawer = createDrawerNavigator();

function HomeNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={BootomTabNavigation} />
      <Drawer.Screen name="SizeChart" component={SizeStackScreen} />
      <Drawer.Screen name="RecommendColor" component={RecommendColorsScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
}
export default HomeNavigator;

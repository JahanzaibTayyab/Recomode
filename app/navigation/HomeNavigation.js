import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import FavoriteNavigator from './FavoriteNavigator';
import Height from './TabNavigation';
//import Check from '../screens/check';

import DrawerContent from '../screens/Drawer';
import ShirtNavigation from './ShirtsNavigation';
import PantNavigation from './PantsNavigation';
import ShoesNavigation from "./ShoesNavigation"

const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: '#009387',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold'
    //   }
    // }}
    initialRouteName={"Shirt"}
  >
    <HomeStack.Screen name="Shirt" component={ShirtNavigation}
      options={{ headerShown: false }}
    // options={{
    //   title: 'Overview',
    //   headerLeft: () => (
    //     <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
    //   )
    // }}
    />
    <HomeStack.Screen name="Pant" component={PantNavigation}
      options={{ headerShown: false }}

    // options={{
    //   title: 'Overview',
    //   headerLeft: () => (
    //     <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
    //   )
    // }}
    />
    <HomeStack.Screen name="Shoes" component={ShoesNavigation}
      options={{ headerShown: false }} />
  </HomeStack.Navigator>
);


const Drawer = createDrawerNavigator();

function HomeNavigator() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Favorites" component={FavoriteNavigator} />
      <Drawer.Screen name="Height" component={Height} />
    </Drawer.Navigator>
  );
}
export default HomeNavigator;

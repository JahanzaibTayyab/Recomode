import * as React from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CargoPantScreen from "../screens/Pants/CargoPantsViewController"
import ChinoPantsScreen from "../screens/Pants/ChinoPantsViewController"
import KhakiPantScreen from "../screens/Pants/KhakiPantsViewController"
import SlimFitPantScreen from "../screens/Pants/SlimFitPantsController"
import StraightfitPants from "../screens/Pants/StraightfitPantViewController"

import colors from "../config/colors"
import { FONT_SEMIBOLD, FONT_Regular } from '../config/Constant';
import Header from "../components/Header"
const Tab = createMaterialTopTabNavigator();
function ShirtNavigation(props) {
    return (
        <>
            <Header topBar={"T-Shirt"} navigation={props.navigation} />
            <Tab.Navigator initialRouteName="Cargo"
                tabBarOptions={{
                    activeTintColor: colors.bitblue,
                    labelStyle: { fontFamily: FONT_Regular, fontSize: 12, },
                    scrollEnabled: true,
                    style: { backgroundColor: 'white', height: 40, marginBottom: 5, elevation: 0 },
                }}>
                <Tab.Screen name="Cargo" component={CargoPantScreen} />
                <Tab.Screen name="Chino" component={ChinoPantsScreen} />
                <Tab.Screen name="Khaki" component={KhakiPantScreen} />
                <Tab.Screen name="Slim Fit" component={SlimFitPantScreen} />
                <Tab.Screen name="Straight Fit" component={StraightfitPants} />
            </Tab.Navigator>
        </>
    )
}

export default ShirtNavigation;
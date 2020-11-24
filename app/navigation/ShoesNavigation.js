import * as React from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import JogerShoesScreen from "../screens/Shoes/NokeShoesViewController"
import SnekaersShoesScreen from "../screens/Shoes/SneakerShoesViewController"
import DressShoesScreen from "../screens/Shoes/DressShoesViewController"

import colors from "../config/colors"
import { FONT_SEMIBOLD, FONT_Regular } from '../config/Constant';
import Header from "../components/Header"
const Tab = createMaterialTopTabNavigator();
function ShirtNavigation(props) {
    return (
        <>
            <Header topBar={"T-Shirt"} navigation={props.navigation} />
            <Tab.Navigator initialRouteName="Joger"
                tabBarOptions={{
                    activeTintColor: colors.bitblue,
                    labelStyle: { fontFamily: FONT_Regular, fontSize: 12, },
                    scrollEnabled: true,
                    style: { backgroundColor: 'white', height: 40, marginBottom: 5, elevation: 0 },
                }}>
                <Tab.Screen name="Jogger" component={JogerShoesScreen} />
                <Tab.Screen name="Sneaker" component={SnekaersShoesScreen} />
                <Tab.Screen name="Formal" component={DressShoesScreen} />

            </Tab.Navigator>
        </>
    )
}

export default ShirtNavigation;
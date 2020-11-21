import * as React from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TShirtsScreen from "../screens/Shirts/TShirtViewController"
import PoloShirtScreen from "../screens/Shirts/PoloShirtViewController"
import DenimShirtScreen from "../screens/Shirts/DenimShirtViewController"
import OfficeShirtScreen from "../screens/Shirts/OfficeShirtsViewController"
import DressShirtsScreen from "../screens/Shirts/DressShirtsViewController"
import colors from "../config/colors"
import { FONT_SEMIBOLD, FONT_Regular } from './../config/Constant';
import Header from "../components/Header"
const Tab = createMaterialTopTabNavigator();
function ShirtNavigation() {
    return (
        <>
            <Header topBar={"T-Shirt"} />
            <Tab.Navigator initialRouteName="Shirt"
                tabBarOptions={{
                    activeTintColor: colors.bitblue,
                    labelStyle: { fontFamily: FONT_Regular, fontSize: 12, },
                    scrollEnabled: true,
                    style: { backgroundColor: 'white', height: 40, marginBottom: 5, elevation: 0 },
                }}>
                <Tab.Screen name="T-Shirt" component={TShirtsScreen} />
                <Tab.Screen name="Denim" component={DenimShirtScreen} />
                <Tab.Screen name="Polo" component={PoloShirtScreen} />
                <Tab.Screen name="Dress Shirt" component={DressShirtsScreen} />
                <Tab.Screen name="Office Shirt" component={OfficeShirtScreen} />
            </Tab.Navigator>
        </>
    )
}

export default ShirtNavigation;
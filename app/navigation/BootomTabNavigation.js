import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import ShirtNavigation from './ShirtsNavigation';
import PantNavigation from './PantsNavigation';
import ShoesNavigation from "./ShoesNavigation"
import ProfileScreen from "../screens/Profile"
import WishListScreen from "../screens/WishList/WishListInfo"
import { FONT_Regular, FONT_LIGHT } from "../config/Constant"
import CartInfo from "../screens/Cart/CartInfo"
import CameraClickButton from './CamerClickButton';


const HomeStack = createStackNavigator();
const CartStack = createStackNavigator();
const AccountStack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        initialRouteName={"Shirt"}
    >
        <HomeStack.Screen name="Shirt" component={ShirtNavigation}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen name="Pant" component={PantNavigation}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen name="Shoes" component={ShoesNavigation}
            options={{ headerShown: false }} />
    </HomeStack.Navigator>
);
const CartStackScreen = ({ navigation }) => (
    <CartStack.Navigator
        initialRouteName={"Cart"}
    >
        <CartStack.Screen name="Cart" component={CartInfo}
            options={{ headerShown: false }} />
    </CartStack.Navigator>
);
const AccountStackScreen = ({ navigation }) => (
    <AccountStack.Navigator
        initialRouteName={"Profile"}
    >
        <AccountStack.Screen name="Profile" component={ProfileScreen}
            options={{ headerShown: false }} />
        <AccountStack.Screen name="WishList" component={WishListScreen}
            options={{ headerShown: false }} />
    </AccountStack.Navigator>
);

const Tab = createBottomTabNavigator();

export default function BootomTabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: "#A3A3A3",
                labelStyle: { fontFamily: FONT_Regular, fontSize: 8 },
                tabStyle: {
                    height: 50,
                    width: '80%',
                    paddingTop: 10,
                    paddingHorizontal: 0
                },
                style: { justifyContent: 'center', alignItems: 'center' }
            }}
        >
            <Tab.Screen
                name="Feed"
                component={HomeStackScreen}
                options={
                    {
                        tabBarLabel: '',
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={focused ? require("../images/icons/icon-home.png") : require("../assets/icons/image.png")}
                                style={{
                                    height: 21.22,
                                    width: 21.5
                                }}
                            />
                        )
                    }}
            />
            <Tab.Screen
                name="Notifications"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require("../images/icons/icon-category.png") : require("../assets/icons/inactivecate.png")}
                            style={{
                                height: 21.22,
                                width: 21.5
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Notifications1"
                component={HomeStackScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <CameraClickButton
                        // onPress={() => navigation.navigate(routes.LISTING_EDIT)}
                        />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="plus-circle"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Cart"
                component={CartStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require("../images/icons/icon-cart.png") : require("../assets/icons/inactivecart.png")}
                            style={{
                                height: 22.22,
                                width: 23.5
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="UserProfile"
                component={AccountStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require("../images/icons/icon-user.png") : require("../assets/icons/inactiveuser.png")}
                            style={{
                                height: 23.22,
                                width: 21.5
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
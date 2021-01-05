import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UploadSingle from '../../UploadSingle'


function HomeScreen(props) {
    const user = {
        "name": 'arsal',
        "password": 'hidden',
    }
    console.log('-------------')
    console.log(user)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Profile"
                onPress={() => props.navigation.navigate('Profile', { user })}
            />
        </View>
    );
}
//1 name, password,
//2 faceAttr,,imageUrl
// skinColor
//3 Height, Weight,
//  RecommendedSize,
//Return whole Url 

function ProfileScreen(props) {
    const user1 = props.route.params.user
    console.log('-------------')
    console.log("I am 1", user1)
    // const Obj1 = JSON.parse(user1)
    const faceAttr = {
        "a": '1',
        'b': '2',
        'c': '3',
        'd': '4',
        'e': '5'
    }
    const user2 = {
        'imageUrl': '..///Iam.Url'
    }
    // const {age,skinColor} = newP;
    user1.faceAttr = faceAttr
    user1.imageUrl = user2.imageUrl
    // user2.fName=Obj1.fName
    // user2.email=Obj1.email
    console.log('-------------')
    console.log("In profile screen ", user1)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Notifications"
                onPress={() => props.navigation.navigate('Notifications', { user1 })}
            />
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
    );
}

function NotificationsScreen(props) {
    const userNotif = props.route.params.user1
    console.log('-------------')
    console.log('I am at the start of notif', userNotif)
    const skin = {
        'skinColor': 'fair'
    }
    userNotif.skinColor = skin.skinColor
    console.log('-------------')
    console.log("I am End of Notification", userNotif)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Settings"
                onPress={() => props.navigation.navigate('Settings', { userNotif })}
            />
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
    );
}

function SettingsScreen(props) {
    const userSett = props.route.params.userNotif
    const HW = {
        "height": "5.6",
        "Weight": "180"
    }
    userSett.height = HW.height
    userSett.weight = HW.Weight
    console.log('i am final ', userSett)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Button
                    title="Go to uploadIamge"
                    onPress={() => props.navigation.navigate('UploadSingle', { userSett })}
                />
            </View>
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
    );
}

const Stack = createStackNavigator();

export default function Practice() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="UploadSingle" component={UploadSingle} />
        </Stack.Navigator>
    );
}


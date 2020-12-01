import React from 'react'
import { View, Text, Image } from 'react-native'

export default function index({ focused }) {
    return (
        <View>
            <Image
                source={focused ? require("../../images/icons/icon-cart.png") : require("../../assets/icons/inactivecart.png")}
                style={{
                    height: 22.22,
                    width: 23.5
                }}
            />
        </View>
    )
}

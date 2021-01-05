import React from 'react'
import { View, Text } from 'react-native'
import Button from "../../components/Button"
import Nav from "../../components/Nav"
import LottieView from 'lottie-react-native';
import { FONT_BOLD, FONT_Regular, FONT_SEMIBOLD, FONT_LIGHT, FONT_MEDIUM } from '../../config/Constant';
import colors from '../../config/colors';
export default function OrderConformation(props) {
    const order = props.route.params.order
    return (
        <>
            <Nav />
            <View style={{ flex: 1 }}>

                <View style={{ alignSelf: "center" }}>
                    <LottieView
                        autoPlay
                        loop={true}
                        source={require('../../assets/animations/12552-red-gift-box.json')}
                        style={{ width: '100%', top: -20 }}
                    />
                </View>
                <View style={{ alignSelf: "center", top: -20 }}>
                    <Text style={{ fontFamily: FONT_MEDIUM, fontSize: 14, color: "black" }}>Your order has been placed , it will dispatch soon!</Text>
                    <Text style={{ fontFamily: FONT_BOLD, color: colors.bitblue, fontSize: 12, textAlign: "center" }}>Thanks for shopping with us</Text>
                </View>
                <View style={{ alignItems: "center", top: -30 }}>
                    <Button title="View Order" width="70%" titlecolor="white" fontFamily={FONT_Regular} onPress={() => props.navigation.navigate('ViewOrder', { order })} />
                    <Button title="Go Home" width="70%" titlecolor="white" fontFamily={FONT_Regular} onPress={() => props.navigation.navigate('Home')} buttoncolor="bitblue" />
                </View>
            </View>
        </>
    )
}

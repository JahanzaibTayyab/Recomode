import React from 'react'
import { View, Text, Image } from 'react-native'
import colors from '../../config/colors'
import { FONT_LIGHT, FONT_MEDIUM, FONT_BOLD } from './../../config/Constant';
import { useSelector } from "react-redux"
function index(props) {
    console.log(props)
    const cartItems = useSelector(state => state)
    return (
        <View>
            <Image
                source={props.focused ? require("../../images/icons/icon-cart.png") : require("../../assets/icons/inactivecart.png")}
                style={{
                    height: 22.22,
                    width: 23.5
                }}
            />
            { cartItems.length > 0 ? <View style={{
                position: 'absolute', height: 20, width: 20, borderRadius: 10, backgroundColor: colors.COLOR_FILLED, right: 10, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,
            }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: FONT_MEDIUM }}>{cartItems.length}</Text>
            </View> : null}
        </View>
    )
}
export default index
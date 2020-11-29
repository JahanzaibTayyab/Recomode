import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import EmptyCart from "./Empty"
import Nav from "../../components/Nav"
import WishList from "../../components/WishList"
import Button from "../../components/Button"
import { FONT_BOLD, FONT_Regular, FONT_SEMIBOLD } from './../../config/Constant';

export default function CartInfo(props) {
    const [showEmpty, setShowEmpty] = React.useState(false)
    const [recentData, setRecentData] = React.useState([
        {
            id: 0,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
        },
        {
            id: 1,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
        },
        {
            id: 2,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
        },
    ]);
    return (
        <>
            <Nav {...props} />
            <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black", position: "absolute", top: 30, left: 30 }}>Cart</Text>
            {showEmpty ? <EmptyCart {...props} /> :
                <ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", top: -20, marginBottom: 20, }}>
                        <Button title="Clear All" width="50%" titlecolor="white" fontFamily={FONT_Regular} buttoncolor={"danger"} />
                        <Button title="Add to cart" width="50%" titlecolor="white" fontFamily={FONT_Regular} />
                    </View>
                </ScrollView>
            }
        </>
    )
}

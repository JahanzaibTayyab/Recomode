import React from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import EmptyCart from "./Empty"
import Nav from "../../components/Nav"
import Button from "../../components/Button"
import colors from "../../config/colors"
import { FONT_BOLD, FONT_Regular, FONT_SEMIBOLD, FONT_LIGHT, FONT_MEDIUM } from '../../config/Constant';
import styles from "./styles"


export default function WishListInfo(props) {
    const [showEmpty, setShowEmpty] = React.useState(false)
    const [recentData, setRecentData] = React.useState([
        {
            id: 0,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186",
            size: "L"
        },
        {
            id: 1,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186",
            size: "M"
        },
        {
            id: 2,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186",
            size: "L"
        },
    ]);
    const handelAddtocart = () => {
        console.log("Click Add to cart")
    }
    const handelClearAll = () => {
        console.log("Click Clear All")
    }
    const wishlist_card = (item) => {
        return (
            <View style={styles.card}>
                <View style={{ height: 90, width: 80, marginHorizontal: 10, marginTop: 5, borderRadius: 15, elevation: 0.1 }}>
                    <Image style={styles.cardimage} source={item.img} resizeMode='contain' />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                        {item.name}
                    </Text>
                    <Text style={styles.subTitle} numberOfLines={2}>
                        {item.type}
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontFamily: FONT_LIGHT }}>Size:</Text>
                        <Text style={{ fontFamily: FONT_MEDIUM, marginHorizontal: 10, color: colors.bitblue }}>{item.size}</Text>
                    </View>

                    <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "#3FC1BE", }} numberOfLines={2}>
                        {item.price} Rs
                     </Text>
                </View>
                <TouchableOpacity
                    style={{ marginTop: 10, marginHorizontal: 140, }}
                    onPress={() => { console.log("Cross Click") }}
                >
                    <Image source={require("../../images/ic_clear_search.png")} resizeMode="contain" style={{ height: 10 }} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <>
            <Nav {...props} />
            <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black", position: "absolute", top: 30, left: 30 }}>WishList</Text>
            {showEmpty ? <EmptyCart {...props} /> :
                <ScrollView>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentData}
                        style={{ marginTop: 15 }}
                        renderItem={({ item, index }) =>
                            wishlist_card(item)
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", top: -20, marginBottom: 20, marginHorizontal: 20, height: 60 }}>
                        <Button title="Clear All" width="50%" titlecolor="white" fontFamily={FONT_Regular} buttoncolor={"danger"} onPress={handelClearAll} />
                        <Button title="Add to cart" width="50%" titlecolor="white" fontFamily={FONT_Regular} onPress={handelAddtocart} />
                    </View>
                </ScrollView>
            }
        </>
    )
}

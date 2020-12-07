import React from 'react'
import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import styles from "./styles"
import Nav from "../../components/Nav"
import { FONT_BOLD, FONT_Regular, FONT_SEMIBOLD, FONT_LIGHT, FONT_MEDIUM } from '../../config/Constant';
import colors from '../../config/colors';
import firestore from '@react-native-firebase/firestore'
import constants from "../../assets/stylesheet/Constants"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import localStorage from "../../auth/storage"
export default function ReviewOrderInformation(props) {
    const order = props.route.params.order
    const [data, setData] = React.useState({})
    const orderdata = () => {
        console.log(order)
        const subscriber = firestore()
            .collection('orders')
            .where('orderId', '==', order)
            .get()
            .then(querySnapshot => {
                setData(querySnapshot._docs[0]._data)
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();

    }

    React.useEffect(() => {
        orderdata()
    }, [])
    const wishlist_card = (item) => {
        return (
            <View style={styles.card}>
                <View style={{ height: 90, width: 80, marginHorizontal: 10, marginTop: 5, borderRadius: 15, elevation: 0.1 }}>
                    <Image style={styles.cardimage} source={{ uri: item.img }} resizeMode='contain' />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                        {item.title}
                    </Text>
                    <Text style={styles.subTitle} numberOfLines={2}>
                        {item.type}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: FONT_LIGHT }}>Size:</Text>
                        <Text style={{ fontFamily: FONT_MEDIUM, marginHorizontal: 10, color: colors.bitblue }}>{item.size}</Text>
                        <Text style={{ fontFamily: FONT_LIGHT, marginHorizontal: 60, }}>Qty:</Text>
                        <Text style={{ fontFamily: FONT_MEDIUM, color: colors.bitblue }}>1</Text>
                    </View>
                    <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "#3FC1BE", }} numberOfLines={2}>
                        {item.price} Rs
                     </Text>
                </View>
            </View>
        )
    }
    return (
        <>
            <KeyboardAwareScrollView style={styles.keyboardAwareScrollView} showsVerticalScrollIndicator={false}>
                <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black", marginHorizontal: 30, textAlign: "center" }}>Order Details</Text>
                <ScrollView style={{ flex: 1, backgroundColor: "white", }} showsVerticalScrollIndicator={false}>
                    <View style={[styles.containerView]}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                            <Text style={{ fontFamily: FONT_BOLD, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>Order Date</Text>
                            <Text style={{ fontFamily: FONT_Regular, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginBottom: 10, marginHorizontal: 30, }}>{data.orderDate}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                            <Text style={{ fontFamily: FONT_BOLD, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>Order Id</Text>
                            <Text style={{ fontFamily: FONT_Regular, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginBottom: 10, marginHorizontal: 30, }}>{data.orderId}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                            <Text style={{ fontFamily: FONT_BOLD, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>Status</Text>
                            <Text style={{ fontFamily: FONT_Regular, flexWrap: "wrap", color: colors.COLOR_FILLED, fontSize: 14, marginTop: 5, marginBottom: 10, marginHorizontal: 30, }}>{data.status}</Text>
                        </View>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: colors.bitblue, marginHorizontal: 40, marginTop: 10 }}>Cart Items</Text>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={data.products}
                            style={{ marginTop: 15 }}
                            renderItem={({ item, index }) =>
                                wishlist_card(item)
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 16, color: colors.bitblue, marginHorizontal: 20, }}>Shipping Information</Text>
                        <Text style={{ fontFamily: FONT_Regular, flex: 1, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>{data.shippingAddress}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontFamily: FONT_BOLD, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>City :</Text>
                            <Text style={{ fontFamily: FONT_Regular, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginBottom: 10, }}>{data.city}</Text>
                            <Text style={{ fontFamily: FONT_BOLD, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>Postal Code :</Text>
                            <Text style={{ fontFamily: FONT_Regular, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginBottom: 10, marginHorizontal: 30 }}>{data.postalCode}</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: colors.COLOR_FILLED, marginHorizontal: 10 }}></View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop: 10, }}>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 16, color: colors.bitblue }}>Payment Method</Text>
                        <Text style={{ fontFamily: FONT_Regular, color: "black", fontSize: 14, marginBottom: 10 }}>{data.paymentMethod}</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: colors.COLOR_FILLED, marginHorizontal: 10 }}></View>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 16, color: colors.bitblue, marginHorizontal: 20, marginTop: 10 }}>Payment Pay on Delivery</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 30, marginTop: 5, }}>
                        <Text style={{ fontFamily: FONT_Regular, fontSize: 14, color: "black" }}>Shipping Charges</Text>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: "black" }}>{data.shippingCharges}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 30, marginTop: 5, }}>
                        <Text style={{ fontFamily: FONT_Regular, fontSize: 14, color: "black" }}>Total Items Price</Text>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: "black", marginBottom: 5 }}>{data.subTotal}</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: colors.COLOR_FILLED, marginHorizontal: 10 }}></View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: "space-between", marginTop: 5, }}>
                        <Text style={{ fontFamily: FONT_BOLD, fontSize: 20, color: "#3FC1BE" }}>Total</Text>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 18, color: "black", marginBottom: 5 }}>{data.totalDues}</Text>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView >
        </>
    )
}

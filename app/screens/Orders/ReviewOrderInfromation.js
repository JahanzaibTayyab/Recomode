import React from 'react'
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from "./styles"
import { FONT_BOLD, FONT_Regular, FONT_SEMIBOLD, FONT_LIGHT, FONT_MEDIUM } from '../../config/Constant';
import colors from '../../config/colors';
import constants from "../../assets/stylesheet/Constants"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import localStorage from "../../auth/storage"
import { formatDate } from "../../ultils/Utilities"
import FeatherIcon from 'react-native-vector-icons/Feather';
import css from "../../Styles/Styles"
export default function ReviewOrderInformation(props) {
    const order = props.route.params.order
    const [data, setData] = React.useState(order)
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
            <View style={[css.topBarView, {
                justifyContent: "flex-start", alignItems: 'center', shadowColor: "gray",
                shadowOpacity: 0.1, shadowRadius: 2, shadowOffset: {
                    height: 1,
                    width: 1,
                },
            }]}>
                <TouchableOpacity style={{ height: 25, width: 64, top: 5, marginHorizontal: 10, }} onPress={() => props.navigation.goBack()}>
                    <Image source={require("../../assets/icons/backBtnTasks.png")} />
                </TouchableOpacity>
                <Text style={{ fontFamily: constants.FONT_FAMILY_BOLD, fontSize: 24, textAlign: 'center', color: "black", alignSelf: "center", marginHorizontal: 20, top: 5 }}> Order Details </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "#F8F8F8", }}>
                <ScrollView style={{ flex: 1, backgroundColor: colors.white, top: 5 }} showsVerticalScrollIndicator={false}>
                    <View style={[styles.containerView, { backgroundColor: colors.white }]}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                            <Text style={{ fontFamily: FONT_BOLD, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>Order Date</Text>
                            <Text style={{ fontFamily: FONT_Regular, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginBottom: 10, marginHorizontal: 30, }}>{formatDate(new Date(data.orderDate))}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                            <Text style={{ fontFamily: FONT_BOLD, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>Order Id</Text>
                            <Text style={{ fontFamily: FONT_Regular, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginBottom: 10, marginHorizontal: 30, }}>{data.orderId}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                            <Text style={{ fontFamily: FONT_BOLD, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>Status</Text>
                            <Text style={[{ fontFamily: constants.FONT_FAMILY_BOLD, fontSize: 12, marginTop: 10, marginHorizontal: 30 },
                            data.status === 'new' ? { color: colors.bitblue } : data.status === 'accepted' ? { color: "green" } : data.status === 'canceled' ? { color: colors.danger } : { color: colors.black }
                            ]}>{data.status}</Text>
                        </View>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: colors.bitblue, marginHorizontal: 40, marginTop: 10 }}>Cart Items</Text>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled={true}
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
                    <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: "space-between", marginTop: 5, marginBottom: 10 }}>
                        <Text style={{ fontFamily: FONT_BOLD, fontSize: 20, color: "#3FC1BE" }}>Total</Text>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 18, color: "black", marginBottom: 5 }}>{data.totalDues}</Text>
                    </View>
                    <Text></Text>
                </ScrollView>
            </View>
        </>
    )
}
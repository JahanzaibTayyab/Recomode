import * as React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    TouchableOpacityBase,
    ActivityIndicator, FlatList
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FONT_BOLD, FONT_LIGHT, FONT_Regular, FONT_SEMIBOLD, SCREEN_WIDTH, FONT_MEDIUM } from "../../../config/Constant"
import styles from './styles'
import colors from "../../../config/colors"
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from "react-redux"

const CheckOut = React.forwardRef((props, ref) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const cartItems = useSelector(state => state)
    const [isUserNameUnique, setUserNameUnique] = React.useState(true)
    const [shippingDues, setShippingDues] = React.useState(150)
    const [productTotalPrice, setProductTotalPrice] = React.useState(0)
    const [data, setData] = React.useState({
        subTotal: '',
        shippingTotal: '',
        totalPaid: '',
    });
    React.useImperativeHandle(ref, () => ({
        nextBtnTapped() {
            return data
        }
    }));

    const [show, setShow] = React.useState(false);
    const handleNextBtnPresses = () => {

    }
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
    React.useEffect(() => {
        const totalPrice = getTotalPrice()
        setProductTotalPrice(totalPrice)
        setData({
            ...data,
            subTotal: totalPrice,
            shippingTotal: shippingDues,
            totalPaid: totalPrice + shippingDues
        })
    }, [])
    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((cart) => {
            console.log(cart)
            total += cart.price * 1;
        });
        return total;
    };
    return (
        <KeyboardAwareScrollView style={styles.keyboardAwareScrollView} showsVerticalScrollIndicator={false}>
            <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black", marginHorizontal: 30, }}>Check Out</Text>
            <ScrollView style={{ flex: 1, backgroundColor: "white", }} showsVerticalScrollIndicator={false}>
                <View style={[styles.containerView]}>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: colors.bitblue, marginHorizontal: 40, marginTop: 10 }}>Cart Items</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cartItems}
                        style={{ marginTop: 15 }}
                        renderItem={({ item, index }) =>
                            wishlist_card(item)
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 16, color: colors.bitblue, marginHorizontal: 20, }}>Shipping Information</Text>
                    <Text style={{ fontFamily: FONT_Regular, flex: 1, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>{props.data.shippingAddress},{props.data.city},{props.data.postalCode}</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.COLOR_FILLED, marginHorizontal: 10 }}></View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop: 10, }}>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 16, color: colors.bitblue }}>Payment Method</Text>
                    <Text style={{ fontFamily: FONT_Regular, color: "black", fontSize: 14, marginBottom: 10 }}>{props.data.paymentMethod}</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.COLOR_FILLED, marginHorizontal: 10 }}></View>
                <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 16, color: colors.bitblue, marginHorizontal: 20, marginTop: 10 }}>Payment Pay on Delivery</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 30, marginTop: 5, }}>
                    <Text style={{ fontFamily: FONT_Regular, fontSize: 14, color: "black" }}>Shipping Charges</Text>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: "black" }}>{shippingDues}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 30, marginTop: 5, }}>
                    <Text style={{ fontFamily: FONT_Regular, fontSize: 14, color: "black" }}>Total Items Price</Text>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: "black", marginBottom: 5 }}>{productTotalPrice}</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.COLOR_FILLED, marginHorizontal: 10 }}></View>
                <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: "space-between", marginTop: 5, }}>
                    <Text style={{ fontFamily: FONT_BOLD, fontSize: 20, color: "#3FC1BE" }}>Total</Text>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 18, color: "black", marginBottom: 5 }}>{data.totalPaid}</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.COLOR_FILLED, marginHorizontal: 10, marginBottom: 130, }}></View>
            </ScrollView>
        </KeyboardAwareScrollView >

    )

})

export default CheckOut
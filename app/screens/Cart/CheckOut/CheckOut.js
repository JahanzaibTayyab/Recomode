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
const CheckOut = React.forwardRef((props, ref) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [isUserNameUnique, setUserNameUnique] = React.useState(true)
    React.useImperativeHandle(ref, () => ({
        nextBtnTapped() {

            return true
        }
    }));

    const [show, setShow] = React.useState(false);
    React.useEffect(() => {

    }, [])
    const [recentData, setRecentData] = React.useState([
        {
            id: 0,
            name: "T Shirt",
            img: require("../../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186",
            size: "L",
            quantity: 9
        },
        {
            id: 1,
            name: "T Shirt",
            img: require("../../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186",
            size: "M", quantity: 8
        },
        {
            id: 2,
            name: "T Shirt",
            img: require("../../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186",
            size: "L", quantity: 910
        },
    ]);

    const handleNextBtnPresses = () => {

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
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: FONT_LIGHT }}>Size:</Text>
                        <Text style={{ fontFamily: FONT_MEDIUM, marginHorizontal: 10, color: colors.bitblue }}>{item.size}</Text>
                        <Text style={{ fontFamily: FONT_LIGHT, marginHorizontal: 60, }}>Qty:</Text>
                        <Text style={{ fontFamily: FONT_MEDIUM, color: colors.bitblue }}>{item.quantity}</Text>
                    </View>
                    <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "#3FC1BE", }} numberOfLines={2}>
                        {item.price} Rs
                     </Text>
                </View>
            </View>
        )
    }
    return (
        <KeyboardAwareScrollView style={styles.keyboardAwareScrollView} showsVerticalScrollIndicator={false}>
            <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black", marginHorizontal: 30, }}>Check Out</Text>
            <ScrollView style={{ flex: 1, backgroundColor: "white", }} showsVerticalScrollIndicator={false}>
                <View style={[styles.containerView]}>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: colors.bitblue, marginHorizontal: 40, marginTop: 10 }}>Cart Items</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentData}
                        style={{ marginTop: 15 }}
                        renderItem={({ item, index }) =>
                            wishlist_card(item)
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 16, color: colors.bitblue, marginHorizontal: 20, }}>Shipping Information</Text>
                    <Text style={{ fontFamily: FONT_Regular, flex: 1, flexWrap: "wrap", color: "black", fontSize: 14, marginTop: 5, marginHorizontal: 30, marginBottom: 10, }}>{props.data.shippingAddress}</Text>
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
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: "black" }}>120</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 30, marginTop: 5, }}>
                    <Text style={{ fontFamily: FONT_Regular, fontSize: 14, color: "black" }}>Total Items Price</Text>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: "black", marginBottom: 5 }}>1200</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.COLOR_FILLED, marginHorizontal: 10 }}></View>
                <View style={{ flexDirection: 'row', marginHorizontal: 30, justifyContent: "space-between", marginTop: 5, }}>
                    <Text style={{ fontFamily: FONT_BOLD, fontSize: 20, color: "#3FC1BE" }}>Total</Text>
                    <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 18, color: "black", marginBottom: 5 }}>1320</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.COLOR_FILLED, marginHorizontal: 10, marginBottom: 130, }}></View>
            </ScrollView>
        </KeyboardAwareScrollView >

    )

})

export default CheckOut
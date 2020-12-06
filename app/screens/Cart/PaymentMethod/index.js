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
import { FONT_BOLD, FONT_LIGHT, FONT_MEDIUM, FONT_Regular, FONT_SEMIBOLD, SCREEN_WIDTH } from "../../../config/Constant"
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore'
import colors from '../../../config/colors'
import AwesomeAlert from 'react-native-awesome-alerts';
const PaymentMethod = React.forwardRef((props, ref) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [isUserNameUnique, setUserNameUnique] = React.useState(true)
    const [buttonColor, setBackgroundColor] = React.useState('white')
    const [paymentMethodFromApi, setPaymentMethodFromApi] = React.useState([])
    React.useImperativeHandle(ref, () => ({
        nextBtnTapped() {
            if (data.paymentMethod != '') {
                return data
            }
            else {
                setShow(true)
                return null
            }
        }
    }
    ));
    const [data, setData] = React.useState({
        paymentMethod: '',
    });
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        paymentMethodFromApiFetch()
    }, [])
    const ConfrimAlert = () => {
        setShow(false);
    };
    const hideAlert = () => {
        setShow(false);
    };
    const paymentMethodFromApiFetch = () => {
        const subscriber = firestore()
            .collection('paymentMethods')
            .onSnapshot(querySnapshot => {
                const payment = []
                querySnapshot.forEach(documentSnapshot => {
                    payment.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    });
                });
                setPaymentMethodFromApi(payment)
            });
        return () => subscriber();
    }
    const handleSelectMethod = (val) => {
        setData({
            ...data,
            paymentMethod: val
        })
    }
    const handleNextBtnPresses = () => {

    }
    const renderCard = (item) => {
        return (
            <TouchableOpacity style={[{
                borderColor: colors.bitblue,
                shadowColor: colors.COLOR_FILLED,
                marginBottom: 8,
                flexDirection: 'row',
                height: 100,
                marginTop: 10,
                borderWidth: 0.2,
                borderRadius: 5,
                overflow: "hidden",

            }, { backgroundColor: buttonColor }]}
                onPress={() => {
                    if (data.paymentMethod === '') {
                        handleSelectMethod(item.name)
                        setBackgroundColor(colors.bluelight)
                    }
                    else {
                        handleSelectMethod('')
                        setBackgroundColor('white')
                    }
                }
                }
            >
                <View style={{ width: 100, height: 100, marginHorizontal: 10, zIndex: 2000 }}>
                    <Image style={{ height: "100%", width: "100%" }} source={require("../../../images/checkout/cod.png")} resizeMode='contain' />
                </View>
                <View style={{ flexDirection: "column", marginTop: 20, }}>
                    <Text style={[{ fontFamily: FONT_BOLD, fontSize: 20, marginHorizontal: 10 }, data.paymentMethod === '' ? { color: colors.COLOR_FILLED } : { color: 'white' }]}>{item.name}</Text>
                    <Text style={{ fontFamily: FONT_MEDIUM, fontSize: 12, marginTop: 10, marginHorizontal: 10, color: "black" }}>{item.type}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <KeyboardAwareScrollView style={[styles.keyboardAwareScrollView,]} showsVerticalScrollIndicator={false}>
            <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black", marginHorizontal: 30, }}>Payment Method</Text>
            <AwesomeAlert
                show={show}
                showProgress={true}
                title="Payment"
                message="Please select atleast one payment method"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={true}
                showConfirmButton={false}
                showCancelButton={true}
                cancelText="Dismiss"
                cancelButtonColor={colors.danger}
                confirmButtonColor={colors.primary}
                titleStyle={{ fontFamily: FONT_BOLD, fontSize: 17, color: colors.primary }}
                messageStyle={{ fontFamily: FONT_Regular, fontSize: 12, color: colors.black }}
                cancelButtonTextStyle={{ fontFamily: FONT_SEMIBOLD }}
                onCancelPressed={() => {
                    hideAlert();
                }}
                onConfirmPressed={() => {
                    ConfrimAlert();
                }}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={paymentMethodFromApi}
                style={{ flex: 1, marginHorizontal: 10 }}
                renderItem={({ item, index }) =>
                    renderCard(item)
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </KeyboardAwareScrollView>

    )

})

export default PaymentMethod
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
import { color } from 'react-native-reanimated';
const PaymentMethod = React.forwardRef((props, ref) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [isUserNameUnique, setUserNameUnique] = React.useState(true)
    const [buttonColor, setBackgroundColor] = React.useState('white')
    const [paymentMethodFromApi, setPaymentMethodFromApi] = React.useState([])
    React.useImperativeHandle(ref, () => ({
        nextBtnTapped() {
            if (data.paymentMethod != '') {
                //   var isUnique =   checkUserNameisUnique()
                return true
            }
            else {
                alert("Incomplete Data", "Please fill all fields")
                return false
            }
        }
    }
    ));
    const [data, setData] = React.useState({
        paymentMethod: '',
    });
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {

        // getJSONFromUserDefaults(constants.KEY_USERINFO).then((userInfo) => {

        //     if (userInfo.user) {
        //         setData({
        //             ...data,
        //             firstName: userInfo.user.first_name,
        //             lastName: userInfo.user.last_name,
        //             userName: userInfo.user.user_name,
        //             //  dOb:formatDate(userInfo.dob, constants.DATE_FORMAT_MONTH_DATE_YEAR),
        //             //      graduationDate: formatDate(expected_graduation, 'mm-yy')

        //         })
        //     }
        //     else if (userInfo) {
        //         setData({
        //             ...data,
        //             firstName: userInfo.first_name,
        //             lastName: userInfo.last_name,
        //             userName: userInfo.user_name,
        //             //   dOb:formatDate(userInfo.dob, constants.DATE_FORMAT_MONTH_DATE_YEAR),
        //             //   graduationDate: formatDate(expected_graduation, 'mm-yy')

        //         })
        //     }
        // }).catch((error) => {
        //     console.log(error);
        // });
        paymentMethodFromApiFetch()
    }, [])
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
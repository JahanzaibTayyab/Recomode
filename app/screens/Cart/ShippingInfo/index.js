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
    ActivityIndicator
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FONT_BOLD, FONT_LIGHT, FONT_Regular, FONT_SEMIBOLD, SCREEN_WIDTH } from "../../../config/Constant"
import styles from './styles'
import Icon from 'react-native-vector-icons/Feather';
const DeliveryInfo = React.forwardRef((props, ref) => {

    const [isLoading, setIsLoading] = React.useState(false)
    const [isUserNameUnique, setUserNameUnique] = React.useState(true)
    React.useImperativeHandle(ref, () => ({

        nextBtnTapped() {
            // return true

            if (data.permanentAddress != '' && data.shippingAddress != "" && data.city != '' && data.postalCode != '') {
                //   var isUnique =   checkUserNameisUnique()
                return true
            }
            else {
                alert("Incomplete Data Shipping", "Please fill all fields")
                return false
            }
        }
    }
    ));


    const [data, setData] = React.useState({
        permanentAddress: '',
        shippingAddress: '',
        city: '',
        postalCode: '',
        vendorNote: '',
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

    }, [])

    const handleAddressNameInput = (val) => {
        setData({
            ...data,
            permanentAddress: val
        })
    }

    const handleShippingAddressInput = (val) => {
        setData({
            ...data,
            shippingAddress: val
        })
    }
    const handleCityInput = (val) => {
        setData({
            ...data,
            city: val
        })
    }
    const handlePostalCodeInput = (val) => {
        setData({
            ...data,
            postalCode: val
        })
    }
    const handleVendorNotenput = (val) => {
        setData({
            ...data,
            vendorNote: val
        })
    }
    const handleNextBtnPresses = () => {

    }
    return (
        <KeyboardAwareScrollView style={styles.keyboardAwareScrollView} showsVerticalScrollIndicator={false}>
            <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black", marginHorizontal: 30, }}>Shipping Info</Text>
            <ScrollView style={{ flex: 1, backgroundColor: "white", }}>
                <View style={[styles.containerView, { marginBottom: 130 }]}>
                    <View style={{ flex: 1, width: SCREEN_WIDTH - 50, marginLeft: 25, marginRight: 25 }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textFieldHeadings}>
                                Permanent Address
                            </Text>
                            <TextInput
                                placeholder=''
                                style={styles.textFields}
                                autoCapitalize='none'
                                value={data.permanentAddress}
                                onChangeText={(val) => handleAddressNameInput(val)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textFieldHeadings}>
                                Shipping Address
                            </Text>
                            <TextInput
                                placeholder=''
                                style={styles.textFields}
                                value={data.shippingAddress}
                                autoCapitalize='none'
                                onChangeText={(val) => handleShippingAddressInput(val)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textFieldHeadings}>
                                City
                            </Text>
                            <TextInput
                                placeholder=''
                                style={styles.textFields}
                                value={data.city}
                                autoCapitalize='none'
                                onChangeText={(val) => handleCityInput(val)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textFieldHeadings}>
                                Postal Code
                            </Text>
                            <TextInput
                                placeholder='000000'
                                style={styles.textFields}
                                value={data.postalCode}
                                autoCapitalize='none'
                                onChangeText={(val) => handlePostalCodeInput(val)}
                            />
                        </View>
                    </View>
                    <View style={[styles.viewSearchBar, { height: 150 }]}>
                        <TextInput
                            multiline={true}
                            placeholder={"Any vender notes"}
                            style={styles.textInputSearchBar}
                            onChangeText={(val) => handleVendorNotenput(val)}
                        >
                        </TextInput>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>

    )

})

export default DeliveryInfo
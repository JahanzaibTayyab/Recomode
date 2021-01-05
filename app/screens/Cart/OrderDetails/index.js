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
import apiAuth from "../../../auth/useAuth"
import localStorage from "../../../auth/storage"
import constants from "../../../assets/stylesheet/Constants"
import AwesomeAlert from 'react-native-awesome-alerts';
import colors from "../../../config/colors"
const OrderDetails = React.forwardRef((props, ref) => {
    const { user } = apiAuth()
    const [buttonText,setButtonText]=React.useState('Default')
    const [editable,setEditable]=React.useState(true)
    React.useImperativeHandle(ref, () => ({
        nextBtnTapped() {
            if (data.firstName != '' && data.email != "" && data.phoneNumber != "") {
                let obj = {
                    "order": {
                        "full_name": data.firstName,
                        "email": data.email,
                        "phoneNumber": data.phoneNumber,
                    }
                }
                return obj
            }
            else {
                setShow(true)
                return null
            }
        }
    }
    ));
    const [data, setData] = React.useState({
        firstName: '',
        email: '',
        phoneNumber: '',
    });
    const [show, setShow] = React.useState(false);
    const ConfrimAlert = () => {
        setShow(false);
    };
    const hideAlert = () => {
        setShow(false);
    };
    React.useEffect(() => {
    }, [])

    const handleFirstNameInput = (val) => {
        setData({
            ...data,
            firstName: val
        })
    }

    const handleEmailInput = (val) => {
        setData({
            ...data,
            email: val
        })
    }

    const handlePhoneNumberInput = (val) => {
        setData({
            ...data,
            phoneNumber: val
        })
    }
    const userDefaults=()=>{
        if(buttonText.match('Default'))
        {
            setData({
                ...data,
                firstName:user.fullName,
                email:user.email
            })
            setButtonText('Custom')
            setEditable(false)
        }
        else if(buttonText.match('Custom'))
        {
            setData({
                ...data,
                firstName:'',
                email:''
            })
            setButtonText('Default')
            setEditable(true)
        }
    }
    return (
        <KeyboardAwareScrollView style={styles.keyboardAwareScrollView} >
            <View style={{flexDirection: 'row',justifyContent:"space-between",marginHorizontal: 30,marginBottom:10,top:5}}>
            <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black",}}>Order Details</Text>
            <TouchableOpacity
                    style={{
                        height: 25,
                        backgroundColor: colors.primary,
                        borderRadius: 10,
                        alignSelf: "flex-end",
                        alignItems: "center", position: "absolute",
                        right: 5
                    }}
                    onPress={() => userDefaults()}
                >
                    <Text style={styles.joinButton}> {buttonText} </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollViewContainer}>
                <AwesomeAlert
                    show={show}
                    showProgress={true}
                    title="Incomplete Data"
                    message="Please fill all the fields"
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
                <View style={[styles.containerView, { marginBottom: 130 }]}>
                    <Text style={[styles.txtTitle2, { color: "black" }]}> Welcome {user.fullName} ! </Text>
                    <View style={{ flex: 1, width: SCREEN_WIDTH - 50, marginLeft: 25, marginRight: 25, marginTop: 10, }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textFieldHeadings}>
                                Full Name
                            </Text>
                            <TextInput
                                placeholder='James'
                                style={styles.textFields}
                                autoCapitalize='none'
                                value={data.firstName}
                                editable={editable}
                                onChangeText={(val) => handleFirstNameInput(val)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textFieldHeadings}>
                                Email
                            </Text>
                            <TextInput
                                placeholder='example@exapmle.com'
                                style={styles.textFields}
                                value={data.email}
                                autoCapitalize='none'
                                editable={editable}
                                onChangeText={(val) => handleEmailInput(val)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textFieldHeadings}>
                                Phone Number
                            </Text>
                            <TextInput
                                placeholder='+92300000000'
                                style={styles.textFields}
                                value={data.phoneNumber}
                                autoCapitalize='none'
                                onChangeText={(val) => handlePhoneNumberInput(val)}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>

    )

})

export default OrderDetails
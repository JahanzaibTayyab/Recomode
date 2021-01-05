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
import AwesomeAlert from 'react-native-awesome-alerts';
import GetLocation from 'react-native-get-location'
import colors from "../../../config/colors"
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import localStorage from "../../../auth/storage"
import constants from '../../../assets/stylesheet/Constants';
const DeliveryInfo = React.forwardRef((props, ref) => {
    const [buttonText,setButtonText]=React.useState('Default')
    const [editable,setEditable]=React.useState(true)
    const [showButton,setShowButton]=React.useState(false)
    const [showDefaultButton,setShowDefaultButton]=React.useState(false)
    const [region, setRegion] = React.useState({
        latitude: 23.8859,
        longitude: 45.0792,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    });
    const checkIfUserHadOrderOrNot = () => {
        localStorage.getKeyFromUserDefaults(constants.KEY_SHIPPING_IDS).then((value)=>{
            if(value)
            {
                setShowButton(true)
            }
        })
      }
    React.useImperativeHandle(ref, () => ({
        nextBtnTapped() {
            if (data.permanentAddress != '' && data.shippingAddress != "" && data.city != '' && data.postalCode != '') {
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
        permanentAddress: '',
        shippingAddress: '',
        city: '',
        postalCode: '',
        vendorNote: '',
    });
    const markerPostion = (val) => {
        setRegion({
            ...region,
            latitude: val.nativeEvent.coordinate.latitude,
            longitude: val.nativeEvent.coordinate.longitude,
        });
    };
    const getLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                setRegion({
                    ...region,
                    latitude: location.latitude,
                    longitude: location.longitude
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                if(json.city!='')
               { setData({
                    ...data,
                    city: json.city,
                    postalCode: json.postal
                })}
            })
            .catch((error) => console.error(error))
            .finally(() => {
                getLocation();
                checkIfUserHadOrderOrNot();
                setIsLoading(false)
            });
    }, [])
    const ConfrimAlert = () => {
        setShow(false);
    };
    const hideAlert = () => {
        setShow(false);
    };
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
        setShowDefaultButton(true)
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
    const handleBtnPresses = () => {
        if(buttonText.match('Default'))
        {
            localStorage.getJSONFromShippingDefaults(constants.KEY_SHIPPING_INFO).then((value) => {
                if (value) {
                  setData({
                      ...data,
                      permanentAddress:value.permanentAddress,
                      shippingAddress:value.shippingAddress,
                      city:value.city,
                      postalCode:value.postalCode
                  })
                }
              });
            setButtonText('Custom')
            setEditable(false)
        }
        else if(buttonText.match('Custom'))
        {
            setData({
                ...data,
                permanentAddress: '',
                shippingAddress: '',
                city: '',
                postalCode: '',
                vendorNote: '',
            })
            setButtonText('Default')
            setEditable(true)
        }
    }
    const userDefaults=()=>{
        localStorage.saveKeyInUserDefaults(constants.KEY_SHIPPING_IDS,'1')
        localStorage.saveJSONShippingDefaults(constants.KEY_SHIPPING_INFO,data)
    }
    return (
        <KeyboardAwareScrollView style={styles.keyboardAwareScrollView} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <View style={{flexDirection: 'row',justifyContent:"space-between",marginHorizontal: 30,marginBottom:10,top:5}}>
            <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black"}}>Shipping Info</Text>
           {showButton? <TouchableOpacity
                    style={{
                        height: 25,
                        backgroundColor: colors.primary,
                        borderRadius: 10,
                        alignSelf: "flex-end",
                        alignItems: "center", position: "absolute",
                        right: 5
                    }}
                    onPress={() => handleBtnPresses()}
                >
                    <Text style={styles.joinButton}> {buttonText} </Text>
                </TouchableOpacity>
                :showDefaultButton?<TouchableOpacity
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
                    <Text style={styles.joinButton}> Save as Default </Text>
                </TouchableOpacity>:null}
            </View>
            <ScrollView nestedScrollEnabled={true}  >
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
                <View style={[styles.containerView]}>
                    <View style={{ flex: 1, width: SCREEN_WIDTH - 50, marginLeft: 25, marginRight: 25 }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textFieldHeadings}>
                                Permanent Address
                            </Text>
                            <TextInput
                                placeholder=''
                                style={styles.textFields}
                                autoCapitalize='none'
                                editable={editable}
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
                                editable={editable}
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
                                editable={editable}
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
                                editable={editable}
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
                <View style={[styles.viewSearchBar, { height: 180, overflow: "hidden", marginBottom: 130 }]}>
                    <MapView
                        style={{ width: '100%', height: "100%" }}
                        region={region}
                        onRegionChangeComplete={(region) => setRegion(region)}>
                        <Marker
                            stopPropagation={false}
                            draggable={true}
                            coordinate={{
                                latitude: region.latitude,
                                longitude: region.longitude,
                            }}
                            onDragEnd={(val) => markerPostion(val)}
                        />
                    </MapView>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>

    )

})

export default DeliveryInfo
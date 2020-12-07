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
    Keyboard,
    ActivityIndicator,
    SafeAreaView, Modal
} from 'react-native'

import PageControl from 'react-native-page-control';
import OnBoard2 from '../OrderDetails'
import OnBoard3 from '../ShippingInfo'
import OnBoard4 from '../PaymentMethod'
import OnBoard5 from '../CheckOut/CheckOut'
import SwipeGesture from '../../../components/SwipeGesture/SwipeGesture'
import constants from '../../../assets/stylesheet/Constants'
import styles from './styles'
import AsyncStore from "@react-native-community/async-storage";
import firestore from '@react-native-firebase/firestore';
import Nav from "../../../components/Nav"
import useAuth from './../../../auth/useAuth';
import { formatDate } from "../../../ultils/Utilities"
import HomeActivityIndicator from "../../../components/HomeActivityIndicator"
import { useSelector } from "react-redux"
import localStorage from "../../../auth/storage"
import LottieView from "lottie-react-native";
const SliderScreen = ({ navigation }) => {
    const { user } = useAuth()
    const cartItems = useSelector(state => state)
    const [screen, setScreen] = React.useState(0);
    const [showLoader, setShowLoader] = React.useState(false)
    const [showBottomView, setShowBottomView] = React.useState(true)
    const [dataSourceParams, setDatSourParams] = React.useState({})
    const onB2Ref = React.useRef();
    const onB3Ref = React.useRef();
    const onB4Ref = React.useRef();
    const onB5Ref = React.useRef();
    const [isLoading, setIsLoading] = React.useState(false)
    React.useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        setShowBottomView(false)
    };

    const _keyboardDidHide = () => {
        setShowBottomView(true)
    };
    const savedata = async (params, order) => {
        await firestore().collection('orders').doc().set(params).then((response) => {
            setShowLoader(false)
            navigation.navigate('ConfromationOrder', { order });
        }).catch((error) => {
            alert(error)
        })
    }
    const handleSubmit = async () => {
        setShowLoader(true)
        localStorage.getKeyFromUserDefaults(constants.KEY_USER_ID).then((userInfo) => {
            console.log(dataSourceParams)
            const order = new Date().getTime()
            let params = {
                "orderId": order,
                "orderDate": formatDate(new Date()),
                "name": dataSourceParams.order.full_name,
                "email": dataSourceParams.order.email,
                "phoneNumber": dataSourceParams.order.phoneNumber,
                "shippingAddress": dataSourceParams.shippingAddress,
                "city": dataSourceParams.city,
                "postalCode": dataSourceParams.postalCode,
                "products": cartItems,
                "subTotal": dataSourceParams.subTotal,
                "shippingCharges": dataSourceParams.shippingTotal,
                "totalDues": dataSourceParams.totalPaid,
                "paymentMethod": dataSourceParams.paymentMethod,
                "user_id": userInfo,
                "status": 'Pending',
                "vendorNote": dataSourceParams.vendorNote,
            }
            savedata(params, order)

        })
    };
    const onSwipePerformed = (action) => {
        switch (action) {
            case 'left': {
                if (screen === 0) {
                    let obj = onB2Ref.current.nextBtnTapped()
                    console.log(obj)
                    if (obj) {
                        setDatSourParams(obj)
                        setScreen(screen + 1)
                    }
                    console.log("from Screen  awipe 2")
                    console.log(dataSourceParams)
                }
                else if (screen === 1) {
                    let obj = onB3Ref.current.nextBtnTapped()
                    console.log(obj)
                    if (obj) {
                        setDatSourParams(obj)
                        setScreen(screen + 1)
                    }
                    console.log("from Screen  awipe 3")
                    console.log(dataSourceParams)
                }
                else if (screen === 2) {
                    let obj = onB4Ref.current.nextBtnTapped()
                    console.log(obj)
                    if (obj) {
                        setDatSourParams(obj)
                        setScreen(screen + 1)
                    }
                    console.log("from Screen  awipe 4")
                    console.log(dataSourceParams)
                }
                else if (screen === 3) {
                    let obj = onB5Ref.current.nextBtnTapped()
                    if (obj) {
                        console.log(dataSourceParams)
                        alert("Last Screen")
                        // setScreen(screen + 1)
                    }
                }
                break;
            }
            case 'right': {


                if (screen != 0) {
                    setScreen(screen - 1)
                }

                break;
            }
            case 'up': {

                break;
            }
            case 'down': {

                break;
            }
            default: {

            }
        }
    }
    const OnBoardingScreen2ViewCOntroller = () => {

        return (
            <View style={styles.onBoargingViewsContainers}>
                <OnBoard2 ref={onB2Ref} />
            </View>
        )
    }
    const OnBoardingScreen3ViewCOntroller = () => {
        return (
            <View style={styles.onBoargingViewsContainers}>
                <OnBoard3 ref={onB3Ref} />
            </View>
        )
    }
    const OnBoardingScreen4ViewCOntroller = () => {

        return (
            <View style={styles.onBoargingViewsContainers}>
                <OnBoard4 ref={onB4Ref} />
            </View>
        )
    }



    const OnBoardingScreen5ViewCOntroller = () => {

        return (
            <View style={styles.onBoargingViewsContainers}>
                <OnBoard5 ref={onB5Ref} data={dataSourceParams} />
            </View>
        )
    }

    const renderViews = () => {
        // Depending upond the page control number, the view screen will be returned

        switch (screen) {
            case 0: {

                return OnBoardingScreen2ViewCOntroller()

            }
            case 1: {

                return OnBoardingScreen3ViewCOntroller()

            }
            case 2: {

                return OnBoardingScreen4ViewCOntroller()

            }
            case 3: {

                return OnBoardingScreen5ViewCOntroller()

            }
            default: {
                console.log('Undeteceted action');
            }
        }
    }
    const pageControlIndicatorTapped = (val) => {
        setScreen(val)
    }
    const handleNextBtnPresses = () => {
        if (screen === 0) {
            let obj = onB2Ref.current.nextBtnTapped()
            console.log(obj)
            if (obj) {
                setDatSourParams(obj)
                setScreen(screen + 1)
            }
        }
        else if (screen === 1) {
            let obj = onB3Ref.current.nextBtnTapped()
            if (obj) {
                let obj2 = dataSourceParams;
                let obj2Keys = Object.keys(obj2)
                for (let i = 0; i < obj2Keys.length; i++) {
                    obj[obj2Keys[i]] = obj2[obj2Keys[i]]
                }
                setDatSourParams(obj)
                setScreen(screen + 1)
            }
        }
        else if (screen === 2) {
            let obj = onB4Ref.current.nextBtnTapped()
            if (obj) {
                let obj2 = dataSourceParams;
                let obj2Keys = Object.keys(obj2)
                for (let i = 0; i < obj2Keys.length; i++) {
                    obj[obj2Keys[i]] = obj2[obj2Keys[i]]
                }
                setDatSourParams(obj)
                setScreen(screen + 1)
            }
        }
        else if (screen === 3) {
            let obj = onB5Ref.current.nextBtnTapped()
            console.log(obj)
            if (obj) {
                let obj2 = dataSourceParams;
                let obj2Keys = Object.keys(obj2)
                for (let i = 0; i < obj2Keys.length; i++) {
                    obj[obj2Keys[i]] = obj2[obj2Keys[i]]
                }
                setDatSourParams(obj)
                console.log("Inner")
                console.log(dataSourceParams)
                handleSubmit()
            }
        }
    }
    return (
        <>

            <Nav />
            <View style={styles.onBoargingViewsContainers}>
                {showLoader ?
                    <LottieView
                        autoPlay
                        loop
                        source={require("../../../assets/animations/loader.json")}
                    />
                    :
                    <SwipeGesture gestureStyle={styles.swipeGestureContainer}
                        onSwipePerformed={(action) => onSwipePerformed(action)}>
                        {renderViews()}
                        {showBottomView ?
                            <View style={styles.pageControll}>
                                <TouchableOpacity style={[styles.buttonMain, { marginTop: Platform.OS === "ios" ? 30 : 20, marginBottom: 10 }]} onPress={() => handleNextBtnPresses()}>
                                    {screen === 3 ? <Text style={styles.textButtonMain}> Place Order </Text> :
                                        <Text style={styles.textButtonMain}> Next </Text>
                                    }
                                </TouchableOpacity>
                                <PageControl
                                    numberOfPages={4}
                                    currentPage={screen}
                                    hidesForSinglePage
                                    pageIndicatorTintColor='#A3A3A3'
                                    currentPageIndicatorTintColor='#656565'
                                    indicatorStyle={{ borderRadius: 5, marginRight: 10, marginLeft: 10 }}
                                    currentIndicatorStyle={{ borderRadius: 5 }}
                                    indicatorSize={{ width: 9, height: 9 }}
                                    onPageIndicatorPress={pageControlIndicatorTapped}
                                />
                            </View>
                            : null}
                    </SwipeGesture>
                }
            </View>
        </>
    )
}


export default SliderScreen
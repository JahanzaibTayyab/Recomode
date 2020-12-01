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
    SafeAreaView
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
const SliderScreen = ({ navigation }) => {

    const [screen, setScreen] = React.useState(2);
    const [showBottomView, setShowBottomView] = React.useState(true)
    const onB2Ref = React.useRef();
    const onB3Ref = React.useRef();
    const onB4Ref = React.useRef();
    const onB5Ref = React.useRef();
    const [isLoading, setIsLoading] = React.useState(false)
    React.useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
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


    const onSwipePerformed = (action) => {
        switch (action) {
            case 'left': {
                if (screen != constants.FIFTH_ONBOARDING_SCREEN) {
                    if (screen === constants.SECOND_ONBOARDING_SCREEN) {
                        let ok = onB2Ref.current.nextBtnTapped()
                        if (ok) {
                            setScreen(screen + 1)
                        }
                    }
                    else if (screen === constants.THIRD_ONBOARDING_SCREEN) {
                        let ok = onB3Ref.current.nextBtnTapped()
                        if (ok) {
                            setScreen(screen + 1)
                        }
                    }
                    else if (screen === constants.FOURTH_ONBOARDING_SCREEN) {
                        let ok = onB4Ref.current.nextBtnTapped()
                        if (ok) {
                            setScreen(screen + 1)
                        }
                    }
                    else if (screen === constants.FIFTH_ONBOARDING_SCREEN) {
                        let ok = onB5Ref.current.nextBtnTapped()
                        if (ok) {
                            setScreen(screen + 1)
                        }
                    }
                }
                break;
            }
            case 'right': {


                if (screen != constants.SECOND_ONBOARDING_SCREEN) {
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
                <OnBoard5 ref={onB5Ref} />
            </View>
        )
    }

    const renderViews = () => {
        // Depending upond the page control number, the view screen will be returned

        switch (screen) {
            case 2: {

                return OnBoardingScreen2ViewCOntroller()

            }
            case 3: {

                return OnBoardingScreen3ViewCOntroller()

            }
            case 4: {

                return OnBoardingScreen4ViewCOntroller()

            }
            case 5: {

                return OnBoardingScreen5ViewCOntroller()

            }
            default: {
                console.log('Undeteceted action');
            }
        }
    }
    const pageControlIndicatorTapped = (val) => {

        if (screen === constants.SECOND_ONBOARDING_SCREEN) {
            let ok = onB2Ref.current.nextBtnTapped()
            if (ok) {
                setScreen(val + 2)
            }
        }
        else if (screen === constants.THIRD_ONBOARDING_SCREEN) {
            let ok = onB3Ref.current.nextBtnTapped()
            if (ok) {
                setScreen(val + 2)
            }
        }
        else if (screen === constants.FOURTH_ONBOARDING_SCREEN) {
            let ok = onB4Ref.current.nextBtnTapped()
            if (ok) {
                setScreen(val + 2)
            }
        }
        else if (screen === constants.FIFTH_ONBOARDING_SCREEN) {
            let ok = onB5Ref.current.nextBtnTapped()
            if (ok) {
                setScreen(val + 2)
            }
        }
    }
    const handleNextBtnPresses = () => {

        if (screen != constants.FIFTH_ONBOARDING_SCREEN) {

            if (screen === constants.SECOND_ONBOARDING_SCREEN) {
                let ok = onB2Ref.current.nextBtnTapped()
                if (ok) {
                    setScreen(screen + 1)
                }

            }
            else if (screen === constants.THIRD_ONBOARDING_SCREEN) {
                let ok = onB3Ref.current.nextBtnTapped()
                if (ok) {
                    setScreen(screen + 1)
                }
            }
            else if (screen === constants.FOURTH_ONBOARDING_SCREEN) {
                let ok = onB4Ref.current.nextBtnTapped()
                if (ok) {
                    setScreen(screen + 1)
                }
            }
            else if (screen === constants.FIFTH_ONBOARDING_SCREEN) {
                let ok = onB5Ref.current.nextBtnTapped()
                if (ok) {
                    setScreen(screen + 1)
                }
            }
        }
        else if (screen === constants.SEVENTH_ONBOARDING_SCREEN) {
            //  let ok =  onB8Ref.current.nextBtnTapped()
            // saveData()

        }
    }


    const saveData = async () => {

        let settingsObj = await onB8Ref.current.nextBtnTapped()


        setIsLoading(true)
        getJSONFromUserDefaults(constants.KEY_USERINFO).then((userInfo) => {


            let params = {
                "first_name": userInfo.user.first_name,
                "last_name": userInfo.user.last_name,
                "user_name": userInfo.user.user_name,
                "dob": userInfo.user.dob,
                "image": userInfo.user.image,
                "expected_graduation": userInfo.user.expected_graduation,
                "pronoun_id": userInfo.user.pronoun_id,
                "role_id": userInfo.user.role_id,
                "institute_id": userInfo.user.institute_id,
                "email": userInfo.user.email,
                "accounttype_id": userInfo.user.accounttype_id,
                "majors": userInfo.majors,
                "interests": userInfo.interests,
                "groups": userInfo.groups,
                "bio": userInfo.bio,
                "settings": settingsObj
            }
            let url = constants.API_SERCER_BASE_URL + 'users/register'
            callPostReq(url, params, (statusCode, responseJson) => {
                if (checkAPICallStatus(statusCode)) {

                    setIsLoading(false)
                    showAlert("Success", "You have signup succesfully")
                    navigation.navigate('TABS');
                    AsyncStorage.clear()

                } else {
                    setIsLoading(false)
                    console.log(responseJson.code);
                }
                setIsLoading(false)
            },
            );
        })
    }
    return (

        <View style={styles.onBoargingViewsContainers}>
            {isLoading ?
                <Loader />
                :
                <SwipeGesture gestureStyle={styles.swipeGestureContainer}
                    onSwipePerformed={(action) => onSwipePerformed(action)}>
                    {renderViews()}
                    {showBottomView ?
                        <View style={styles.pageControll}>
                            <TouchableOpacity style={[styles.buttonMain, { marginTop: Platform.OS === "ios" ? 30 : 20, marginBottom: 10 }]} onPress={() => handleNextBtnPresses()}>
                                {screen === constants.FIFTH_ONBOARDING_SCREEN ? <Text style={styles.textButtonMain}> Place Order </Text> :
                                    <Text style={styles.textButtonMain}> Next </Text>
                                }
                            </TouchableOpacity>
                            <PageControl
                                numberOfPages={4}
                                currentPage={screen - 2}
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
    )
}


export default SliderScreen
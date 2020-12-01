import React, { Component } from 'react';
import constants from '../../../assets/stylesheet/Constants';
import { StyleSheet, Platform, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    keyboardAwareScrollView: {
        flex: 1,
        backgroundColor: constants.COLOR_WHITE,
    },
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: constants.COLOR_WHITE,
    },
    scrollViewContainer: {
        flex: 1,
        backgroundColor: constants.COLOR_WHITE,
    },
    txtTitle: {
        fontSize: constants.FONT_SIZE_TWENTYEIGHT,
        fontFamily: constants.FONT_FAMILY_SEMIBOLD,
        textAlign: 'center',
    },
    txtTitle2: {
        fontSize: constants.FONT_SIZE_TWENTY,
        fontFamily: constants.FONT_FAMILY_SEMIBOLD,
        marginTop: Platform.OS === 'ios' ? 15 : 15,
    },
    imageLogo: {
        height: 263,
        width: 419,
    },
    imageLogoSmalle: {
        height: 105,
        width: 167,
    },
    messagesTabBarIcon: {
        height: 21.22,
        width: 21.5,
    },
    threadsTabBarIcon: {
        height: 20.24,
        width: 24.97,
    },
    homeTabBarIcon: {
        height: 21.41,
        width: 19.5,
    },
    groupsTabBarIcon: {
        height: 22,
        width: 29.64,
    },
    calenderTabBarIcon: {
        height: 22,
        width: 23.8,
    },

    textFieldWithIcon: {
        flexDirection: 'row',
        marginTop: 20,
        borderWidth: 2,
        borderColor: constants.COLOR_FILLED,
        borderRadius: 25,
        justifyContent: 'space-between',
        height: 53,
    },
    imageIconIInTextField: {
        height: 45,
        width: 45,
        marginTop: 3,
        marginBottom: 5,
        marginLeft: 4,
    },
    textFieldsLogin: {
        flex: 1,
        margin: 5,
        height: 40,
        color: '#656565',
        fontFamily: constants.FONT_FAMILY_SEMIBOLD,
        fontSize: constants.FONT_SIZE_TWELEVE,
    },
    btnSignIn: {
        backgroundColor: constants.COLOR_WHITE,
        borderColor: constants.COLOR_BORDER,
        borderWidth: 0,
        borderRadius: 20,
        width: 101,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        shadowColor: constants.COLOR_SHADOW,
        shadowOpacity: 0.3,
        elevation: 6,
        shadowRadius: 20,
        shadowOffset: { width: 1, height: 13 },
    },
    textBtnSignIn: {
        color: constants.COLOR_FILLED,
        fontSize: constants.FONT_SIZE_FIFTEEN,
        fontFamily: constants.FONT_FAMILY_SEMIBOLD,
    },
    btnForgotPass: {
        //   justifyContent: 'flex-end',
        height: 20,

        marginBottom: 20,
    },
    textForgotPassBtn: {
        color: constants.COLOR_FILLED,
        fontSize: constants.FONT_SIZE_FIFTEEN,
        fontFamily: constants.FONT_FAMILY_SEMIBOLD,
    },
    imageWisconsinLogo: {
        height: 56,
        width: 56,
        marginTop: 30,
    },
    btnWithIconAndText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageIconAtLeftInBtn: {
        height: 22,
        width: 22,
        paddingRight: 5,
    },
    btnSocialMediaText: {
        fontFamily: constants.FONT_FAMILY_REGULAR,
        color: constants.COLOR_FILLED,
        fontSize: 10,
    },
    buttonMain: {
        width: 295,
        height: 43,
        borderRadius: 30,
        backgroundColor: constants.COLOR_FILLED,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonMain: {
        fontFamily: constants.FONT_FAMILY_REGULAR,
        color: constants.COLOR_WHITE,
        fontSize: constants.FONT_SIZE_EIGHTEEN,
    },
    btnLogoutText: {
        fontFamily: constants.FONT_FAMILY_REGULAR,
        color: constants.COLOR_FILLED,
        fontSize: constants.FONT_SIZE_FOURTEEN,
        marginTop: 15,
    },
    btnAtBottom: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 40 : 40,
    },
    textBtnAtBottom: {
        fontFamily: constants.FONT_FAMILY_REGULAR,
        color: constants.COLOR_FILLED,
        fontSize: constants.FONT_SIZE_TEN,
    },
    textFieldHeadings: {
        fontFamily: constants.FONT_FAMILY_REGULAR,
        fontSize: constants.FONT_SIZE_TEN,
    },
    textFields: {
        color: '#000000',
        fontSize: constants.FONT_SIZE_FOURTEEN,
        height: 40,
        fontFamily: constants.FONT_FAMILY_MEDIUM,
        borderBottomWidth: 1,
        borderBottomColor: '#00A9FF',
        // opacity: 0.5,
        paddingTop: 10,
    },
    onBoargingViewsContainers: {
        flex: 1,
        width: constants.SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    },
    swipeGestureContainer: {
        height: '100%',
        width: constants.SCREEN_WIDTH,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageControll: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        // backgroundColor:'red'
    },
    viewSearchBar: {
        flex: 1,
        width: constants.SCREEN_WIDTH - 40,
        marginLeft: 20,
        marginRight: 20,
        height: 35,
        borderRadius: 20,
        backgroundColor: constants.COLOR_WHITE,
        borderColor: constants.COLOR_BORDER,
        borderWidth: 0,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: constants.COLOR_SHADOW,
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 20,
        shadowOffset: { width: 1, height: 13 },
    },

    viewSearchBarOnTopBar: {
        flex: 1,
        width: constants.SCREEN_WIDTH - 80,
        marginLeft: 10,
        marginRight: 10,
        height: 32.21,
        borderRadius: 20,
        backgroundColor: constants.COLOR_WHITE,
        borderColor: constants.COLOR_BORDER,
        borderWidth: 0,
        alignItems: 'center',
        marginTop: 30,
        shadowColor: constants.COLOR_SHADOW,
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 20,
        shadowOffset: { width: 1, height: 13 },
        flexDirection: 'row',
    },

    textInputSearchBar: {
        fontFamily: constants.FONT_FAMILY_SEMIBOLD,
        fontSize: constants.FONT_SIZE_TEN,
        width: '90%',
        height: '100%',
        color: '#A3A3A3',
    },

    viewSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: constants.COLOR_FILLED,
        borderBottomWidth: 1,
        marginTop: 20,
    },
    textSetting: {
        fontFamily: constants.FONT_FAMILY_REGULAR,
        fontSize: constants.FONT_SIZE_FOURTEEN,
        marginLeft: -5,
        marginBottom: 30,
    },
    topBarView: {
        height: 100,
        width: constants.SCREEN_WIDTH,
        backgroundColor: constants.COLOR_WHITE,
        position: 'absolute',
        top: Platform.OS === 'ios' ? 30 : 0,
        flexDirection: 'row',
    },

    segmentBarContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 105 : 75,
        borderRadius: 0,
    },
    segmentTabStyle: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    activeSegtmentTabStyle: {
        borderBottomColor: constants.COLOR_FILLED,
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
    },
    tabsContainerStyle: {
        width: 150,
        height: 25,
        borderRadius: 0,
    },
    tabTextStyle: {
        fontFamily: constants.FONT_FAMILY_BOLD,
        fontSize: constants.FONT_SIZE_TEN,
        color: constants.COLOR_FILLED,
        opacity: 0.3,
    },
    activeTabTextStyel: {
        fontFamily: constants.FONT_FAMILY_BOLD,
        fontSize: constants.FONT_SIZE_TEN,
        color: constants.COLOR_FILLED,
        opacity: 1,
    },
    imgBackgroundStyle: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    viewContainerDashboard: {
        marginLeft: 30,
        marginRight: 30,
        width: '90%',
        borderRadius: 20,
        backgroundColor: constants.COLOR_WHITE,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: constants.COLOR_SHADOW,
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 20,
        shadowOffset: { width: 1, height: 13 },
    },
    taskView: {
        flexDirection: 'row',
        borderBottomColor: constants.COLOR_FILLED,
        borderBottomWidth: 0.5,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10
    },
    blurViewStyles: {
        position: 'absolute',
        width: constants.SCREEN_WIDTH,
        height: constants.SCREEN_HEIGHT,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    notificationsCell: {
        height: 60,
        width: '95%',
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    notificationBtns: {
        height: 44,
        width: 44,
        marginLeft: 10,
    },
    groupContainer: {
        borderRadius: 20,
        backgroundColor: 'cyan',
        borderColor: constants.COLOR_BORDER,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: constants.COLOR_SHADOW,
        shadowOpacity: 0.1,
        elevation: 1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 1 },
        height: 124,
        width: 159,
        marginLeft: 15,
    },
    sliderBar: {
        width: 2, height: 10, borderRightWidth: 1, borderRightColor: "#BEBEBE"
    },
    sliderCircle: {
        width: 8, height: 8, backgroundColor: "#BEBEBE", borderRadius: 4
    },
    textTaskInfo: {
        fontFamily: constants.FONT_FAMILY_REGULAR,
        fontSize: constants.FONT_SIZE_TWELEVE,
        marginLeft: 10,
        marginBottom: 15
    },
    imgTaskInfoCheckBox: {
        width: 14,
        height: 14,
        marginLeft: -20
    },
    switchView: {
        flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, flex: 1
    },
    recurringButton: {
        borderColor: constants.COLOR_FILLED,
        borderRadius: 14,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: "space-between",
        height: 28,
        marginLeft: 5,
        marginTop: 5,
        borderWidth: 1,
    },
    switchText: {
        fontSize: constants.FONT_SIZE_TEN,
        fontFamily: constants.FONT_FAMILY_REGULAR,
        marginBottom: 20,
    },

    recurringNameText: {
        fontFamily: constants.FONT_FAMILY_REGULAR,
        fontSize: constants.FONT_SIZE_FOURTEEN,
        textAlign: "center",
        alignSelf: 'center',
        padding: 5,
        color: constants.COLOR_FILLED
    },

    weekDayButtonView: {
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 25,
        borderRadius: 12.5,
        borderWidth: 0.5,
        marginTop: 10,
        borderColor: constants.COLOR_FILLED
    },
    weekDayText: {
        alignSelf: 'center',
        fontFamily: constants.FONT_FAMILY_SEMIBOLD,
        fontSize: constants.FONT_SIZE_TEN,

    },
    containerOnModal: {
        width: "100%",
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: constants.COLOR_SHADOW,
        shadowOpacity: 0.1,
        elevation: 1,
        shadowRadius: 10,
        backgroundColor: constants.COLOR_WHITE,
        shadowOffset: { width: 0, height: 1 },
        height: 389,
    },



    textInput: {
        fontSize: constants.FONT_SIZE_FOURTEEN,
        fontFamily: constants.FONT_FAMILY_MEDIUM,
        borderBottomWidth: 1,
        borderBottomColor: constants.COLOR_FILLED,
        paddingTop: 5,
        marginBottom: 10,
        width: "25%",
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
    },

    customRecuringHeadins: {
        fontSize: constants.FONT_SIZE_TEN,
        fontFamily: constants.FONT_FAMILY_REGULAR,
        color: 'gray',
        marginTop: 10,
        marginLeft: 10
    },

    fullContainer: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },
});


export default styles;

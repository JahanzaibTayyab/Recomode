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
    txtTitle2: {
        fontSize: constants.FONT_SIZE_TWENTY,
        fontFamily: constants.FONT_FAMILY_SEMIBOLD,
        marginTop: Platform.OS === 'ios' ? 15 : 15,
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
    joinButton: { fontFamily: constants.FONT_FAMILY_REGULAR, fontSize: constants.FONT_SIZE_TWELEVE, color: constants.COLOR_WHITE, textAlign: "center", alignItems: "center", marginTop: 5, marginHorizontal: 10, },
});


export default styles;

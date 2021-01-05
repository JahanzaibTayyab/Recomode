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
        marginTop: Platform.OS === 'ios' ? 50 : 50,
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
    textInputSearchBar: {
        fontFamily: constants.FONT_FAMILY_SEMIBOLD,
        fontSize: constants.FONT_SIZE_FOURTEEN,
        width: '90%',
        height: '100%',
        color: 'black',
        alignContent: "flex-start"
    },
     joinButton: { fontFamily: constants.FONT_FAMILY_REGULAR, fontSize: constants.FONT_SIZE_TWELEVE, color: constants.COLOR_WHITE, textAlign: "center", alignItems: "center", marginTop: 5, marginHorizontal: 10, },
});


export default styles;

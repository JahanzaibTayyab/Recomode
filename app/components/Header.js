import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Avatar } from 'react-native-paper';
import colors from "../config/colors"
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FONT_SEMIBOLD, FONT_MEDIUM, FONT_LIGHT, FONT_Regular } from "../config/Constant"
export default function Header() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginHorizontal: 20, justifyContent: "space-between" }}>
                <TouchableOpacity
                    style={{ marginTop: 20 }}
                >
                    <FeatherIcons name='menu' color={colors.bitblue} size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 20, marginLeft: 200, }}
                >
                    <MaterialIcons name='notifications-none' size={25} color={colors.bitblue} />
                </TouchableOpacity>
                <View style={styles.ImageContainer}>
                    <Avatar.Image size={35} source={require('../assets/images/userprofile.jpg')} style={{ marginTop: 20, }} />
                </View>
            </View>
            <View style={{ marginHorizontal: 20, }}>
                <Text style={{ fontFamily: FONT_LIGHT, color: "#292a5e" }}>Nov 19, 2020</Text>
                <Text style={styles.text}>Have a nice day,</Text>
                <Text style={styles.text}>Jahanzaib!</Text>
            </View>
            <View style={styles.textContainer}>
                <TextInput
                    placeholderTextColor={colors.medium}
                    underlineColorAndroid="transparent"
                    style={{ width: "75%", marginHorizontal: 20, }}
                    placeholder="Search for an Outfit"
                />
                <MaterialIcons
                    name="search"
                    size={20}
                    color={colors.medium}
                    style={styles.icon}
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        justifyContent: "flex-start"
    },
    ImageContainer: { width: 50, height: 70, backgroundColor: colors.bitblue, borderBottomRightRadius: 50, borderBottomLeftRadius: 50, justifyContent: "center", alignItems: "center" },
    textContainer: {
        marginHorizontal: 20,
        borderWidth: 0.5,
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        paddingRight: 20,
        marginVertical: 10,
        width: "90%",
        height: 40,
        borderColor: colors.bitblue,
    },
    text: {
        fontFamily: FONT_SEMIBOLD, fontSize: 20, color: colors.bitblue
    },
    icon: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    }
});

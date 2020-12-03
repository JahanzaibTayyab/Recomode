import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Avatar } from 'react-native-paper';
import colors from "../config/colors"
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FONT_SEMIBOLD, FONT_MEDIUM, FONT_LIGHT, FONT_Regular } from "../config/Constant"
import AuthContext from './../auth/context';
import { formatDate } from "../ultils/Utilities"
export default function Header({ topBar, marginBottom = 10, showUserInfo, navigation }) {
    const { user } = useContext(AuthContext)
    return (
        <View style={[styles.container]}>
            {showUserInfo ? <View>
                <View style={{ flexDirection: "row", marginHorizontal: 20, justifyContent: "space-between" }}>
                    <TouchableOpacity
                        style={{ marginTop: 20 }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image source={require("../images/icons/icon-homes.png")} style={{}} resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginLeft: 200, }}
                    >
                        <MaterialIcons name='notifications-none' size={25} color={colors.bitblue} />
                    </TouchableOpacity>
                    <View style={[styles.ImageContainer, { marginBottom: 0 }]}>
                        <Avatar.Image size={35} source={{ uri: user.imageUrl }} style={{ marginTop: 20, }} />
                    </View>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: -25, }}>
                    <Text style={{ fontFamily: FONT_LIGHT, color: "#292a5e" }}>{formatDate(new Date())}</Text>
                    <Text style={styles.text}>Have a nice day,</Text>
                    <Text style={styles.text}>{user.fullName} !</Text>
                </View>
                <View style={[styles.textContainer, { marginBottom: 0 }]}>
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
            </View> :
                <View>
                    <View style={{ flexDirection: "row", marginHorizontal: 20, justifyContent: "space-between" }}>
                        <TouchableOpacity
                            style={{ marginTop: 20 }}
                            onPress={() => navigation.openDrawer()}
                        >
                            <Image source={require("../images/icons/icon-homes.png")} style={{}} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginTop: 20, marginLeft: 200, }}
                        >
                            <MaterialIcons name='notifications-none' size={25} color={colors.bitblue} />
                        </TouchableOpacity>
                        <View style={[styles.ImageContainer, { marginBottom }]}>
                            <Avatar.Image size={35} source={{ uri: user.imageUrl }} style={{ marginTop: 20, }} />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: -25, }}>
                        <Text style={{ fontFamily: FONT_LIGHT, color: "#292a5e" }}>{formatDate(new Date())}</Text>
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
                </View>}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        justifyContent: "flex-start",
    },
    ImageContainer: { width: 50, height: 70, backgroundColor: colors.bitblue, borderBottomRightRadius: 50, borderBottomLeftRadius: 50, justifyContent: "center", alignItems: "center", },
    textContainer: {
        marginHorizontal: 20,
        borderWidth: 0.5,
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        paddingRight: 20,
        width: "90%",
        height: 40,
        borderColor: colors.bitblue,
        marginTop: 5,
    },
    text: {
        fontFamily: FONT_SEMIBOLD, fontSize: 20, color: colors.bitblue, marginBottom: 2
    },
    icon: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    }
});

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather';

import colors from "../config/colors"
import { FONT_Regular, FONT_SEMIBOLD, FONT_LIGHT, FONT_MEDIUM } from "../config/Constant"

export default function MiniCard({ title, subtitle, price, like, image, onPress, icon }) {
    return (
        <View>
            <TouchableOpacity style={styles.card}
                onPress={onPress}
            >
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={styles.logoImage}>
                        <Image source={image}
                            resizeMode="contain"
                            style={{ width: "100%", height: "100%", backgroundColor: colors.white }}
                        />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: colors.bitblue, marginTop: 5, }} numberOfLines={2}>{title}</Text>
                        <Text style={{ fontFamily: FONT_Regular, fontSize: 10, color: "#333333", }}>{subtitle}</Text>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12, color: "black" }}>{price}</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                            {icon && <FeatherIcons name="heart" />}
                            <Text style={{ fontFamily: FONT_LIGHT, fontSize: 12 }}>{like}</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,

    },
    logoImage: {

        width: 60, height: 60, backgroundColor: colors.white
        , overflow: "hidden", marginRight: 15, marginHorizontal: 5,

    },
    card: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: colors.COLOR_BORDER,
        borderWidth: 0,
        justifyContent: 'center',
        shadowColor: colors.COLOR_FILLED,
        shadowOpacity: 0.9,
        elevation: 4,
        shadowRadius: 20,
        shadowOffset: { width: 1, height: 50 },
        height: 70,
        width: 150,
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 10,
    },
    detailsContainer: {
        marginHorizontal: 25,
        marginBottom: 10,
        zIndex: -1
    },
    image: {
        marginTop: 10,
        width: "100%",
        height: 200,
    },
    subTitle: {
        fontFamily: FONT_MEDIUM, fontSize: 12, color: "#333333"
    },
    title: {
        marginBottom: 5,
        fontFamily: FONT_SEMIBOLD,
        color: colors.bitblue
    },
});

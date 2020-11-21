import React from 'react'
import { View, Text } from 'react-native'

export default function UserInfo({ topBar }) {
    return (
        <View style={{ position: "absolute" }}>
            {topBar === "T-Shirt" ?
                <View style={{ marginHorizontal: 20, marginTop: -20, }}>
                    <Text style={{ fontFamily: FONT_LIGHT, color: "#292a5e" }}>Nov 19, 2020</Text>
                    <Text style={styles.text}>Have a nice day,</Text>
                    <Text style={styles.text}>Jahanzaib!</Text>
                </View> : null}
        </View>
    )
}

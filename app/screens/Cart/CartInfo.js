import React from 'react'
import { View, Text } from 'react-native'
import EmptyCart from "./Empty"
import Nav from "../../components/Nav"

export default function CartInfo(props) {
    const [showEmpty, setShowEmpty] = React.useState(false)
    return (
        <>
            {showEmpty ? <EmptyCart {...props} /> :
                <View>
                    <Nav {...props} />
                    <Text>Jahanzaib</Text>
                </View>
            }
        </>
    )
}

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import stripe from "tipsi-stripe"


stripe.setOptions({
    "publisableKey": 'pk_test_51HyzS3CSXA43SZXtq9o4hb2HS4EJM0Ymb2SQnrlj32QGSpoTzTJy98L0zMyGAR0ET3t5yszbONfMp9YZdUPk16F300IGLhuZXc'
})
import Button from "./Button"
export default function StripePayment() {
    const [loading, setLoading] = React.useState(false)
    const [token, setToken] = React.useState(null)
    const [allowed, setAllowed] = React.useState(false)

    const status = async () => {
        const allowed = await stripe.deviceSupportsNativePay()
        setAllowed(allowed)
    }
    React.useEffect(() => {
        status();
    }, [])

    const handleCardPayPress = async () => {
        try {
            setLoading(true),
                setToken(null)
            const token = await stripe.paymentRequestWithNativePay({
                total_price: '100.00',
                currency_code: 'USD',
                shipping_address_required: true,
                phone_number_required: true,
                shipping_countries: ['US', 'CA'],
                line_items: [{
                    currency_code: 'USD',
                    description: 'Whisky',
                    total_price: '50.00',
                    unit_price: '50.00',
                    quantity: '1',
                }, {
                    currency_code: 'USD',
                    description: 'Vine',
                    total_price: '30.00',
                    unit_price: '30.00',
                    quantity: '1',
                }, {
                    currency_code: 'USD',
                    description: 'Tipsi',
                    total_price: '20.00',
                    unit_price: '20.00',
                    quantity: '1',
                }],
            })
            setLoading(false),
                setToken(token)
        } catch (error) {
            setLoading(false)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Card Form Example
        </Text>
            <Text style={styles.instruction}>
                Click button to show Card Form dialog.
        </Text>
            <Button
                text="Enter you card and pay"
                loading={loading}
                onPress={handleCardPayPress}
            />
            <View
                style={styles.token}
            >
                {token &&
                    <Text style={styles.instruction}>
                        Token: {token.tokenId}
                    </Text>
                }

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instruction: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    token: {
        height: 20,
    }
})

import React from 'react'
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import Nav from "../../components/Nav"
import styles from "../../Styles/Styles"
import constants from "../../assets/stylesheet/Constants"
import colors from "../../config/colors"
import firestore from '@react-native-firebase/firestore'
import localStorage from "../../auth/storage"
import { formatDate, formatTime } from "../../ultils/Utilities"
export default function OrderScreen({ navigation }) {
    const [dataSource, setDataSource] = React.useState([])
    React.useEffect(() => {
        getData();
    }, [])
    const getOrderFromCloud = () => {
        localStorage.getKeyFromUserDefaults(constants.KEY_USER_ID).then((value) => {
            const subscriber = firestore()
                .collection('orders')
                .where('user_id', '==', value)
                .onSnapshot(querySnapshot => {
                    const orders = []
                    querySnapshot.forEach(documentSnapshot => {
                        orders.push({
                            ...documentSnapshot.data(),
                        });
                    });
                    setDataSource(orders);
                });
            // Unsubscribe from events when no longer in use
            return () => subscriber();
        })
    }
    const getData = () => {
        getOrderFromCloud();
    }
    const renderAppoinments = (item) => {
        return (
            <View>
                <TouchableOpacity
                    style={{ height: 80, backgroundColor: "white", borderRadius: 15, elevation: 5, shadowColor: constants.COLOR_SHADOW, shadowRadius: 1, marginHorizontal: 20, marginBottom: 12, marginTop: 5 }}
                    onPress={() => navigation.navigate("ViewOrder", { order: item })}

                >
                    <View style={{ justifyContent: "center", alignSelf: "flex-end", backgroundColor: colors.primary, width: 60, borderTopRightRadius: 15, borderBottomLeftRadius: 15, height: 30, }}>
                        <Text style={{ fontFamily: constants.FONT_FAMILY_BOLD, color: colors.white, fontSize: 12, textAlign: "center" }}>RS {item.totalDues}</Text>
                    </View>
                    <View style={{ marginHorizontal: 15, top: -20 }}>
                        <Text style={{ fontFamily: constants.FONT_FAMILY_REGULAR, color: "black" }}>{formatDate(new Date(item.orderDate))}
                            <Text style={{ color: colors.bluelight }}> at
                            <Text style={{ color: "black", fontFamily: constants.FONT_FAMILY_REGULAR }}> {formatTime(item.orderDate)}</Text>
                            </Text>
                        </Text>
                        <View style={{ flexDirection: 'row', top: 3, }}>
                            <Text style={{ fontFamily: constants.FONT_FAMILY_SEMIBOLD, fontSize: 10, marginTop: 5, color: "black" }}>Order Id</Text>
                            <Text style={{ fontFamily: constants.FONT_FAMILY_BOLD, fontSize: 12, marginHorizontal: 10, marginTop: 3 }}>{item.orderId}</Text>
                        </View>
                        <Text style={[{ fontFamily: constants.FONT_FAMILY_BOLD, fontSize: 12, marginTop: 10 },
                        item.status === 'new' ? { color: colors.bitblue } : item.status === 'accepted' ? { color: "green" } : item.status === 'canceled' ? { color: colors.danger } : { color: colors.black }
                        ]}>{item.status}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.containerView}>
            <Nav from="Appoinments" navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontFamily: constants.FONT_FAMILY_BOLD, fontSize: 14, marginHorizontal: 25, marginTop: 10, marginBottom: 20, color: colors.black }}>Your Orders</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataSource}
                    renderItem={({ item, index }) =>
                        renderAppoinments(item)
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
                <Text></Text>
            </ScrollView>
        </View>
    )
}

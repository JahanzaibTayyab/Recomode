import * as React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView,
    RefreshControl, FlatList
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from "../../assets/stylesheet/styles"
import { SCREEN_WIDTH, SCREEN_HEIGHT, FONT_SEMIBOLD, FONT_Regular, FONT_LIGHT } from "../../config/Constant"
import Header from "../../components/Header"
import colors from '../../config/colors';
import Card from "../../components/Card"
import MiniCard from "../../components/MiniCard"

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

function OfficeShirtsViewController(props) {
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [refreshing, setRefreshing] = React.useState(false);
    const [popularData, setPopularData] = React.useState([
        {
            id: 0,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
            like: 16
        },
        {
            id: 1,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
            like: 15
        },
        {
            id: 2,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
            like: 14
        },
        {
            id: 3,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
            like: 13
        },
        {
            id: 4,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
            like: 12
        },
    ]);
    const [dataSource, setDataSource] = React.useState([
        { "Brand": "Adidas", "Color": "Green", "Size": "L", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/GFS1.jpg?alt=media&token=685a862d-ba37-4bd2-ae9b-2ef78a272182", "id": "1MGblThhikhsGxFSYEhS" },
        { "Brand": "Adidas", "Color": "Green", "Size": "S", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/GFS4.jpg?alt=media&token=e52da5ad-2b66-4d52-accb-c804826c42fa", "id": "Ck51Ota5w6u4jvq1UKNm" },
        { "Brand": "Adidas", "Color": "Green", "Size": "L", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/GFS2.jpg?alt=media&token=538261a6-1706-4d0d-864f-61773fa80499", "id": "DzXBzcLa6ZHjtRJPPjQt" },
        { "Brand": "Gucci", "Color": "Black", "Size": "L", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/BFS2.jpg?alt=media&token=9db69d49-9608-4c68-b574-96c648e87460", "id": "K2mRGmfmnKqLxpzOiwce" }, { "Brand": "Gucci", "Color": "Black", "Size": "M", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/BFS4.jpg?alt=media&token=06adf648-3247-47f4-988b-e3f8d983150f", "id": "SCPAVFpy7R8xixnV54Ax" }, { "Brand": "Adidas", "Color": "Green", "Size": "M", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/GFS3.jpg?alt=media&token=8075a924-418c-488a-a951-0c33a2aea763", "id": "SCPa8jXr4aOuXA9KVHhU" }, { "Brand": "Gucci", "Color": "Black", "Size": "M", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/BFS3.jpg?alt=media&token=ca57a3c9-c221-43f0-a667-267c77cc6e9b", "id": "Z0EOv8PoUzg86tncSYak" },
        { "Brand": "Gucci", "Color": "Black", "Size": "L", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/BFS1.jpg?alt=media&token=d7872a66-beae-46d9-91a7-24bcea58858c", "id": "jR7Sfr4kaCPvBTt0DDd3" }, { "Brand": "Gucci", "Color": "Black", "Size": "S", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/BFS5.jpg?alt=media&token=72f80e54-d995-4ef6-b581-21a1cafc643c", "id": "lyK7asuAgifSy91BLMVP" }])
    const handleIndexChange = (index) => {
        setSelectedIndex(index)
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);
    const renderPopularViews = () => {
        return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={popularData}
                renderItem={({ item, index }) =>
                    <MiniCard
                        title={item.name}
                        subtitle={item.type}
                        price={item.price}
                        image={item.img}
                        like={item.like}
                        onPress={() => console.log(item.id)}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
    const renderRecomendationViwes = () => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataSource}
                renderItem={({ item, index }) =>
                    <Card
                        index={index}
                        title={item.Brand}
                        subTitle={item.Type}
                        image={item.Url}
                        brandlogo={require("../../assets/images/Adidas_Logo.png")}
                        onPress={() => {
                            console.log(item.Brand)
                            console.log(item.Size)
                            console.log(index)
                        }}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
    return (
        <View style={[styles.container, { backgroundColor: "#f0f2f5", }]}>
            <View style={{ flex: 1, justifyContent: "flex-start" }}>
                <ScrollView showsVerticalScrollIndicator={false}
                    onScrollToTop={() => console.log("yha")}
                >
                    <View style={{ backgroundColor: colors.white }}>
                        <Text style={{ fontSize: 20, fontFamily: FONT_SEMIBOLD, color: colors.bitblue, marginHorizontal: 16, marginTop: 5, }}>Most Liked</Text>
                    </View>
                    {renderPopularViews()}
                    <View style={{ marginBottom: 5, }}>
                        <Text style={{ fontSize: 20, fontFamily: FONT_SEMIBOLD, color: colors.bitblue, marginHorizontal: 16 }}>Our Recomendations</Text>
                    </View>
                    {renderRecomendationViwes()}
                </ScrollView>
            </View>
        </View>
    )
}
export default OfficeShirtsViewController
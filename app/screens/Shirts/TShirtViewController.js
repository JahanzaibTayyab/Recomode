import * as React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView,
    RefreshControl, FlatList, TouchableWithoutFeedback

} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from "../../assets/stylesheet/styles"
import { SCREEN_WIDTH, SCREEN_HEIGHT, FONT_SEMIBOLD, FONT_Regular, FONT_LIGHT, FONT_MEDIUM } from "../../config/Constant"
import Header from "../../components/Header"
import colors from '../../config/colors';
import Card from "../../components/Card"
import MiniCard from "../../components/MiniCard"
import Modal from 'react-native-modal';
import Button from "../../components/Button"
import FeatherIcons from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/MaterialIcons';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
function TShirtViewController(props) {
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [refreshing, setRefreshing] = React.useState(false);
    const [showComplateLookModal, setComplateLookModal] = React.useState(false)
    const [liked, setLiked] = React.useState(false);
    const [counter, setCounter] = React.useState(-2);
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
    const [recentData, setRecentData] = React.useState([
        {
            id: 0,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
        },
        {
            id: 1,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
        },
        {
            id: 2,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
        },
        {
            id: 3,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
        },
        {
            id: 4,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            type: "Adidas",
            price: "186 RS",
        },
    ]);
    const [dataSource, setDataSource] = React.useState([
        { "Brand": "Adidas", "Color": "green", "Size": "L", "Type": "Full Sleeves", "Url": "https://firebasestorage.googleapis.com/v0/b/hometofb-6f06b.appspot.com/o/GFS1.jpg?alt=media&token=685a862d-ba37-4bd2-ae9b-2ef78a272182", "id": "1MGblThhikhsGxFSYEhS" },
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
                        icon={true}
                        onPress={() => {
                            setSelectedItem(item),
                                setComplateLookModal(true)
                        }
                        }
                    />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
    const renderRecentViews = () => {
        return (
            <>
                <Text style={{ fontSize: 20, fontFamily: FONT_SEMIBOLD, color: colors.bitblue, marginHorizontal: 16 }}>Recently Views</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={recentData}
                    renderItem={({ item, index }) =>
                        <MiniCard
                            title={item.name}
                            subtitle={item.type}
                            price={item.price}
                            image={item.img}
                            onPress={() => {
                                setSelectedItem(item),
                                    setComplateLookModal(true)
                            }}
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </>
        );
    }
    const renderRecomendationViwes = () => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataSource}
                renderItem={({ item, index }) =>
                    <>
                        {index === 3 ? renderRecentViews() : null}
                        <Card
                            index={index}
                            title={item.Brand}
                            subTitle={item.Type}
                            image={item.Url}
                            brandlogo={require("../../assets/images/Adidas_Logo.png")}
                            onPress={() => {
                                setSelectedItem(item),
                                    setComplateLookModal(true)
                            }}
                        />
                    </>
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
            {selectedItem && <View>
                <Modal
                    isVisible={showComplateLookModal}
                    coverScreen={true}
                    onSwipeComplete={() => setComplateLookModal(false)}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    onBackButtonPress={() => setComplateLookModal(false)}
                    backdropColor={colors.bitblue}
                    backdropOpacity={0.5}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                >

                    <View style={styles.modelCard}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontFamily: FONT_LIGHT, fontSize: 8, color: colors.primary }}>
                                STEP 1
                                 <View>
                                    <Text style={{ color: colors.lightGrey }}>{' '} _ </Text>
                                </View>
                                <Text style={{ fontFamily: FONT_LIGHT, fontSize: 8, color: colors.lightGrey }}> {''} STEP 2</Text>
                                <View>
                                    <Text style={{ color: colors.lightGrey }}>{' '} _ </Text>
                                </View>
                                <Text style={{ fontFamily: FONT_LIGHT, fontSize: 8, color: colors.lightGrey }}> {''} STEP 3</Text>
                            </Text>
                        </View>
                        <Image style={{
                            width: "100%",
                            height: 300,
                            marginTop: 10
                        }} source={{ uri: selectedItem.Url }} resizeMode="contain" />
                        <View style={{
                            marginHorizontal: 25,
                            marginBottom: 10,
                            marginTop: 20,
                        }}>
                            <View style={styles.modelInner}>
                                <Image
                                    source={require("../../assets/images/Adidas_Logo.png")}
                                    resizeMode="contain"
                                    style={{
                                        position: 'absolute',
                                        bottom: 10,
                                        width: "80%",
                                        height: 80,
                                    }}
                                />
                            </View>
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    setLiked(!liked);
                                }}
                            >
                                <View style={styles.modrlHeart}>
                                    <AIcon
                                        name='favorite'
                                        size={25}
                                        color={liked ? 'red' : 'white'}
                                    >
                                    </AIcon>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={{
                                marginBottom: 5,
                                fontFamily: FONT_SEMIBOLD,
                                color: colors.bitblue
                            }} numberOfLines={1}>
                                {selectedItem.Brand}
                            </Text>
                            <Text style={{ fontFamily: FONT_MEDIUM, fontSize: 12, color: "#333333" }} numberOfLines={2}>
                                {selectedItem.Type}
                            </Text>
                            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "space-between" }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontFamily: FONT_SEMIBOLD }}>Size:</Text>
                                    <Text style={{ fontFamily: FONT_MEDIUM, marginHorizontal: 10, color: colors.bitblue }}>{selectedItem.Size}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontFamily: FONT_SEMIBOLD, marginHorizontal: 10 }}>Color:</Text>
                                    <View style={[{ width: 30, height: 20, borderRadius: 5 }, { backgroundColor: selectedItem.Color }]}>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 5, }}>
                                <FeatherIcons name="heart" />
                                <Text style={{ fontFamily: FONT_LIGHT, fontSize: 12, marginHorizontal: 10, }}>16</Text>
                            </View>
                            <ScrollView style={{ height: 30, marginTop: 5, }}>
                                <Text
                                    numberOfLines={2}
                                    style={{ fontFamily: FONT_LIGHT, fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                            </ScrollView>
                            <View style={{ alignItems: "center", marginTop: -15, }}>
                                <Button
                                    title="Complete Look"
                                    titlecolor="white"
                                    width="60%"
                                    onPress={() => {

                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>}
        </View >
    )
}
export default TShirtViewController

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
import firestore from '@react-native-firebase/firestore'
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
import HomeActivityIndicator from './../../components/HomeActivityIndicator';
import ActivityIndicator from './../../components/ActivityIndicator';
import useAuth from "../../auth/useAuth";
import { FlatGrid } from 'react-native-super-grid';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
function TShirtViewController(props) {
    const { user } = useAuth
    const [showActivityIndicator, setActivityIndicator] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [refreshing, setRefreshing] = React.useState(false);
    const [showComplateLookModal, setComplateLookModal] = React.useState(false)
    const [liked, setLiked] = React.useState(false);
    const [counter, setCounter] = React.useState(-2);
    const [popularData, setPopularData] = React.useState(null);
    const [showCompletButton, setShowCompleteButton] = React.useState(false)
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
    const [dataSource, setDataSource] = React.useState([])
    var shirtColors = ["black", "gray", "navy Blue", "crimson", "brown", "yellow", "orange", "green", "cream", "khaki"]
    const recomendationdata = () => {
        const subscriber = firestore()
            .collection('shirts')
            .where('type', '==', 'TShirt')
            .where('color', 'in', shirtColors).limit(5)
            .onSnapshot(querySnapshot => {
                const shirts = []
                querySnapshot.forEach(documentSnapshot => {
                    shirts.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    });
                });
                setDataSource(shirts);
                console.log("Returned from Firebase ", shirts)
                console.log('Total : ', shirts.length - 1)
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();

    }
    const populardataView = () => {
        const subscriber = firestore()
            .collection('shirts').limit(3)
            .orderBy('like', 'desc')
            .get()
            .then(querySnapshot => {
                const shirt = []
                querySnapshot.forEach(documentSnapshot => {
                    shirt.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    });
                });
                setPopularData(shirt);
                console.log("Returned from Firebase ", shirt)
                console.log('Total : ', shirts.length - 1)
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }
    React.useEffect(() => {
        recomendationdata()
        populardataView()
    }, [])
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
                    data={popularData}
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
        console.log(dataSource)
        return (
            // <FlatList
            //     showsVerticalScrollIndicator={false}
            //     data={dataSource}
            //     renderItem={({ item, index }) =>
            // <>
            //     {index === 3 ? renderRecentViews() : null}
            //     <Card
            //         index={index}
            //         title={item.name}
            //         subTitle={item.brand}
            //         image={item.img}
            //         brandlogo={item.brandLogo}
            //         onPress={() => {
            //             setSelectedItem(item),
            //                 setComplateLookModal(true)
            //         }}
            //     />
            // </>
            //     }
            //     keyExtractor={(item, index) => index.toString()}
            // />
            <FlatGrid
                itemDimension={130}
                data={dataSource}
                style={{
                    flex: 1,
                }}
                spacing={10}
                renderItem={({ item, index }) => (
                    <Card
                        index={index}
                        title={item.title}
                        subTitle={item.brand}
                        image={item.img}
                        brandlogo={item.brandLogo}
                        onPress={() => {
                            setSelectedItem(item),
                                setComplateLookModal(true)
                        }}
                    />
                )}
            />

        )
    }
    return (
        <>
            <HomeActivityIndicator visible={showActivityIndicator} />
            <View style={[styles.container, { backgroundColor: "#f0f2f5", }]}>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                    <ScrollView showsVerticalScrollIndicator={false}
                        onScrollToTop={() => console.log("yha")}
                    >
                        {/* <View style={{ backgroundColor: colors.white }}>
                            <Text style={{ fontSize: 20, fontFamily: FONT_SEMIBOLD, color: colors.bitblue, marginHorizontal: 16, marginTop: 5, }}>Most Liked</Text>
                        </View>
                        {renderPopularViews()} */}
                        <View style={{ marginBottom: 5, backgroundColor: "white" }}>
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
                        onBackButtonPress={() => setComplateLookModal(false)}
                        backdropColor={colors.bitblue}
                        backdropOpacity={0.5}
                        animationIn="zoomInDown"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={300}
                        backdropTransitionOutTiming={300}
                    >
                        <View style={styles.modelCard}>
                            <TouchableOpacity
                                style={{ marginHorizontal: 10, marginTop: 10 }}
                                onPress={() => setComplateLookModal(false)}
                            >
                                <Image source={require("../../images/icons/icon-backs.png")} resizeMode="contain" style={{ width: 25 }} />
                            </TouchableOpacity>
                            <View style={{ alignItems: "center", marginTop: -20, }}>
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
                            <ScrollView>
                                <Image style={{
                                    width: "100%",
                                    height: 300,
                                    marginTop: 10
                                }} source={{ uri: selectedItem.img }} resizeMode="contain" />
                                <View style={{
                                    marginHorizontal: 25,
                                    marginBottom: 10,
                                    marginTop: 20,
                                }}>
                                    <View style={styles.modelInner}>
                                        <Image
                                            source={{ uri: selectedItem.brandlogo }}
                                            resizeMode="contain"
                                            style={{
                                                position: 'absolute',
                                                bottom: 10,
                                                width: "80%",
                                                height: 100,
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
                                        {selectedItem.name}
                                    </Text>
                                    <Text style={{ fontFamily: FONT_MEDIUM, fontSize: 12, color: "#333333" }} numberOfLines={2}>
                                        {selectedItem.type}
                                    </Text>
                                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={{ fontFamily: FONT_SEMIBOLD }}>Size:</Text>
                                            <Text style={{ fontFamily: FONT_MEDIUM, marginHorizontal: 10, color: colors.bitblue }}>{selectedItem.size}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={{ fontFamily: FONT_SEMIBOLD, marginHorizontal: 10 }}>Color:</Text>
                                            <View style={[{ width: 30, height: 20, borderRadius: 5 }, { backgroundColor: selectedItem.color }]}>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 5, }}>
                                        <FeatherIcons name="heart" />
                                        <Text style={{ fontFamily: FONT_LIGHT, fontSize: 12, marginHorizontal: 10, }}>{selectedItem.like}</Text>
                                    </View>
                                    <ScrollView style={{ height: 30, marginTop: 5, }}>
                                        <Text
                                            numberOfLines={2}
                                            style={{ fontFamily: FONT_LIGHT, fontSize: 12 }}>{selectedItem.description}</Text>
                                    </ScrollView>
                                    <View style={{ marginTop: -15, flexDirection: "row", }}>
                                        <Button
                                            title="Add to Cart"
                                            titlecolor="white"
                                            buttoncolor="bitblue"
                                            fontFamily={FONT_Regular}
                                            width="50%"
                                            onPress={() => {
                                                // setComplateLookModal(false)
                                                // const color = selectedItem.color
                                                // console.log("color", color)
                                                // setTimeout(function () {
                                                //     props.navigation.navigate("Pant", { color })
                                                // }, 700)
                                                console.log("Add to cart")
                                            }}
                                        />
                                        <Button
                                            title="Complete Look"
                                            titlecolor="white"
                                            fontFamily={FONT_Regular}
                                            width="50%"
                                            onPress={() => {
                                                setComplateLookModal(false)
                                                //setActivityIndicator(!showActivityIndicator)
                                                const color = selectedItem.color
                                                console.log("color", color)
                                                setTimeout(function () {
                                                    props.navigation.navigate("Pant", { color })
                                                }, 700)
                                                // props.navigation.navigate("Pant")
                                            }}
                                        />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </Modal>
                </View>}
            </View >
        </>
    )
}
export default TShirtViewController

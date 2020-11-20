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
// import constants from '../../../../Constants/Constants'
// import styles from '../../../../Styles/Styles'
// import TopBar from '../../../Views/TopBarView/TopBarView'
import SegmentedControlTab from "react-native-segmented-control-tab";
// import MyGroupsViewController from "../GroupsViewController/MyGroupsViewController/MyGroupsViewController"
// import DiscoverGroupViewController from "../GroupsViewController/DiscoverGroupsViewController/DiscoverGroupsViewController"

import styles from "../../assets/stylesheet/styles"
import { SCREEN_WIDTH, SCREEN_HEIGHT, FONT_SEMIBOLD, FONT_Regular, FONT_LIGHT } from "../../config/Constant"
import Header from "../../components/Header"
import colors from '../../config/colors';
import { Avatar } from 'react-native-paper';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Card from "../../components/Card"

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const ShirtsViewController = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [showAddToBagModal, setShowAddToBagModal] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [selectedSize, setSelectedSize] = React.useState("")
    const [refreshing, setRefreshing] = React.useState(false);
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "T Shirt",
            img: require("../../assets/images/Shirt1.png"),
            bgColor: "#BF012C",
            type: "T Shirt",
            price: "$186",
            sizes: ['M', 'L', 'S']
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: require("../../assets/images/Shirt1.png"),
            bgColor: "#D39C67",
            type: "T Shirt",
            price: "$135",
            sizes: ['M', 'L', 'S']
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: require("../../assets/images/Shirt1.png"),
            bgColor: "#7052A0",
            type: "T Shirt",
            price: "$199",
            sizes: ['M', 'L', 'S']
        },
    ]);
    const handleIndexChange = (index) => {
        setSelectedIndex(index)
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);
    const renderPopularViews = () => {
        return (
            <TouchableOpacity style={{
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
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        width: 60, height: 60, backgroundColor: colors.white
                        , overflow: "hidden", marginRight: 15, marginHorizontal: 5,
                    }}>
                        <Image source={require("../../assets/images/Shirt1.png")}
                            resizeMode="contain"
                            style={{ width: "100%", height: "100%", backgroundColor: colors.white }}
                        />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: colors.bitblue, marginTop: 5, }}>T Shirt</Text>
                        <Text style={{ fontFamily: FONT_Regular, fontSize: 10, color: "#333333", }}>Adidas</Text>
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12, color: "black" }}>900 RS</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                            <FeatherIcons name="heart" />
                            <Text style={{ fontFamily: FONT_LIGHT, fontSize: 12 }}>15</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={[styles.container, { backgroundColor: "#f0f2f5" }]}>
            {/* <TopBar from="Groups" /> */}
            <Header />
            <View style={{ flex: 1, justifyContent: "flex-start" }}>
                <ScrollView>
                    <View style={{ backgroundColor: colors.white }}>
                        <Text style={{ fontSize: 20, fontFamily: FONT_SEMIBOLD, color: colors.bitblue, marginHorizontal: 16, marginTop: 5, }}>Most Liked</Text>
                    </View>
                    {renderPopularViews()}
                    <View style={{ marginBottom: 5, }}>
                        <Text style={{ fontSize: 20, fontFamily: FONT_SEMIBOLD, color: colors.bitblue, marginHorizontal: 16 }}>Our Recomendations</Text>
                    </View>
                    <Card
                        title="Jahnzaib"
                        subTitle="Love"
                        image={require("../../assets/images/Shirt1.png")}
                    />
                    <Card
                        title="Jahnzaib"
                        subTitle="Love"
                        image={require("../../assets/images/Shirt1.png")}
                    />
                    <Card
                        title="Jahnzaib"
                        subTitle="Love"
                        image={require("../../assets/images/Shirt1.png")}
                    />
                </ScrollView>

                {/* <View style={{ height: 260, marginTop: 10 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={trending}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderShirtView(item, index)}
                    />
                </View> */}
            </View>
            {/* <View style={styles.segmentBarContainer} >
                    <SegmentedControlTab
                        values={["My Groups", "Discover", "Discover", "Discover", "Discover", "Discover", "Discover"]}
                        tabStyle={styles.segmentTabStyle}
                        activeTabStyle={styles.activeSegtmentTabStyle}
                        selectedIndex={selectedIndex}
                        tabsContainerStyle={styles.tabsContainerStyle}
                        tabTextStyle={styles.tabTextStyle}
                        activeTabTextStyle={styles.activeTabTextStyel}
                        onTabPress={(index) => handleIndexChange(index)}
                    />
                </View>
                <View style={{ width: SCREEN_WIDTH, flex: 1, marginTop: Platform.OS === "ios" ? 120 : 100, height: '100%' }}>
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    >
                        {selectedIndex === 0 ?
                            <MyGroupsViewController navigation={navigation} />
                            : <DiscoverGroupViewController navigation={navigation} />}
                    </ScrollView>
                </View> */}
        </View>
    )
}
export default ShirtsViewController
import * as React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView,
    RefreshControl
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

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const ShirtsViewController = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = React.useState(
        [
            {
                "id": "1",
                "categoryName": "College of Agriculture and Life Scieces",
                "categories": [
                    {
                        "name": "Agriculture & Applied Economics",
                    },
                    {
                        "name": 'Agriculture Business Management ',
                    },
                    {
                        "name": 'Agronomy',
                    },
                    {
                        "name": 'Animal Sciences',
                    },
                ]
            },
            {
                "id": "2",
                "categoryName": "Wisconisin School of Buisness",
                "categories": [
                    {
                        "name": "Accounting",
                    },
                    {
                        "name": "Actuarial Sciences",
                    },
                    {
                        "name": "Finance, Investment, and Banking",
                    },
                    {
                        "name": "Infomation Systems",
                    },
                    {
                        "name": "Accounting",
                    },
                    {
                        "name": "Finance, Investment, and Banking",
                    },
                ]
            },
            {

                "id": "3",
                "categoryName": "School of Education",
                "categories": [
                    {
                        "name": "Art (BFA)",
                    },
                    {
                        "name": "Art (BS)",
                    },
                    {
                        "name": "Art Education",
                    },
                    {
                        "name": "Communction Science and Disorders",
                    },
                    {
                        "name": "Art Education",
                    },
                    {
                        "name": "Art Education",
                    },
                ]

            },
            {
                "id": "4",
                "categoryName": "College of Engineering",
                "categories": [
                    {
                        "name": "Biomedical Engineering",
                    },
                    {
                        "name": "Chemical Engineering",
                    },
                    {
                        "name": "Civil Engineering",
                    },
                    {
                        "name": "Geological Engineering",
                    },
                    {
                        "name": "Civil Engineering",
                    },
                    {
                        "name": "BioMedical Engineering",
                    },
                ]


            },
            {

                "id": "5",
                "categoryName": "Scholle of Human Ecology",
                "categories": [
                    {
                        "name": "Cummonity & NonProfit",
                    },
                    {
                        "name": "Human Development & Family Studies",
                    },
                    {
                        "name": "Interior Acrhitecture",
                    },
                    {
                        "name": "Personal Finance",
                    },
                    {
                        "name": "Cummonity & NonProfit",
                    },
                    {
                        "name": "Cummonity & NonProfit",
                    },
                ]
            },
        ]
    )

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
                elevation: 2,
                shadowRadius: 10,
                shadowOffset: { width: 1, height: 50 },
                height: 70,
                width: 150,
                marginLeft: 15,
                marginTop: 10
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
                        <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, color: "#5F478C", marginTop: 5, }}>T Shirt</Text>
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
        <View style={styles.container}>
            {/* <TopBar from="Groups" /> */}
            <Header />
            <View style={{ flex: 1, justifyContent: "flex-start" }}>
                <Text style={{ fontSize: 20, fontFamily: FONT_SEMIBOLD, color: "#5F478C", marginHorizontal: 16, marginTop: 10, }}>Popular Shirts</Text>
                {renderPopularViews()}
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
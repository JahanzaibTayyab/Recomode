import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import EmptyCart from "./Empty"
import Nav from "../../components/Nav"
import Button from "../../components/Button"
import ScrollableTabView from "react-native-scrollable-tab-view";
import styles from "./styles"
import { FONT_BOLD, FONT_Regular, FONT_SEMIBOLD } from './../../config/Constant';
import MyCart from './MyCart/index';
import { useSelector } from "react-redux"
import {
    Languages,
    Images,
    Constants,
    Config,

    Tools,
} from "@common";
import StepIndicator from "../../components/StepIndicator"
export default function CartInfo(props) {
    const [showEmpty, setShowEmpty] = React.useState(false)
    const cartItems = useSelector(state => state)
    const steps = [
        { label: Languages.MyCart, icon: Images.IconCart },
        { label: Languages.Delivery, icon: Images.IconPin },
        { label: Languages.Payment, icon: Images.IconMoney },
        { label: Languages.Order, icon: Images.IconFlag },
    ];
    const [openModal, setModel] = React.useState(false)
    const [order, setOrder] = React.useState('')
    const [currentIndex, setCurrentIndex] = React.useState(0)
    return (
        <>
            <Nav {...props} />
            {/* <Text style={{ fontFamily: FONT_BOLD, fontSize: 16, color: "black", position: "absolute", top: 30, left: 30 }}>Cart</Text> */}
            {cartItems.length === 0 ? <EmptyCart {...props} /> :
                <View style={[styles.fill, { backgroundColor: "white" }]}>
                    <View style={styles.content}>
                        {/* <DeliveryScreen /> */}
                        <MyCart {...props} />

                        {/* <ScrollableTabView
                            // ref={(tabView) => {
                            //     this.tabCartView = tabView;
                            // }}
                            locked
                            // onChangeTab={this.updatePageIndex}
                            style={{ backgroundColor: "white" }}
                            initialPage={0}
                            tabBarPosition="overlayTop"
                            prerenderingSiblingsNumber={1}
                            renderTabBar={() => <View style={{ padding: 0, margin: 0 }} />}>
                            <MyCart
                                //  key="cart"
                                // onNext={this.onNext}
                                // onPrevious={this.onPrevious}
                                // navigation={navigation}
                                //onViewProduct={onViewProduct}
                                cartItems={recentData}
                            />
                        </ScrollableTabView> */}
                        {/* <MyCart {...props} /> */}
                        {/* <ChangeQuantity /> */}
                        {/* <ProductItem
                            // key={index.toString()}
                            viewQuantity
                            product={"Jahanzaib"}
                            onPress={() =>
                                // this.props.onViewProduct({ product: item.product })
                                console.log("OnView Press")
                            }
                            variation={3}
                            quantity={4}
                            //  onRemove={props.removeCartItem}
                            currency={"RS"}
                        /> */}
                    </View>
                </View>
            }
        </>
    )
}

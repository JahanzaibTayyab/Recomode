/** @format */

import React, { PureComponent } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import { SwipeRow } from "react-native-swipe-list-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "@expo";
import ProductItem from "../../../components/ProductItem";
import { Languages, Color, Tools } from "@common";
import css from "../styles";
import styles from "./styles";
import Button from "../../../components/Button"
import { FONT_Regular } from "../../../config/Constant";
function MyCart(props) {
  const [recentData, setRecentData] = React.useState([
    {
      id: 1,
      product: {
        name: "T Shirt",
        img: require("../../../assets/images/Shirt1.png"),
        type: "Adidas",
        price: 186,
      },
      quantity: 6
    },
    {
      id: 2,
      product: {
        name: "T Shirt",
        img: require("../../../assets/images/Shirt1.png"),
        price: 187
      },
      quantity: 4

    },
    {
      id: 3,
      product: {
        name: "T Shirt",
        img: require("../../../assets/images/Shirt1.png"),
        type: "Adidas",
        price: 186,
      },
      quantity: 5

    },])
  const { cartItems, isFetching, discountType, currency } = props;
  let colors = [Color.darkOrange, Color.darkYellow, Color.yellow];


  const getTotalPrice = () => {
    console.log("Call The get Price")
    let total = 0;
    recentData.forEach((cart) => {
      console.log(cart)
      total += cart.product.price * cart.quantity;
    });
    return total;
  };
  const totalPrice = getTotalPrice();
  const renderHiddenRow = (rowData, index) => {
    return (
      <TouchableOpacity
        key={`hiddenRow-${index}`}
        style={styles.hiddenRow}
        onPress={() =>
          //this.props.removeCartItem(rowData.product, rowData.variation)
          console.log("removeCart")
        }>
        <View style={{ marginRight: 23 }}>
          <FontAwesome name="trash" size={30} color="white" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={css.row}>
          <Text style={[css.label, { color: "black" }]}>
            {Languages.TotalPrice}
          </Text>
          <Text style={css.value}>
            {Tools.getCurrecyFormatted(totalPrice, currency)}
          </Text>
        </View>
        <View style={styles.list}>
          {recentData &&
            recentData.map((item, index) => (
              <SwipeRow
                key={index.toString()}
                disableRightSwipe
                leftOpenValue={75}
                rightOpenValue={-75}>
                {renderHiddenRow(item, index)}
                <ProductItem
                  key={index.toString()}
                  viewQuantity
                  product={item.product}
                  onPress={() =>
                    props.onViewProduct({ product: item.product })
                  }
                  quantity={item.quantity}
                  variation={item.variation}
                  //onRemove={removeCartItem}
                  currency={currency}
                />
              </SwipeRow>
            ))}
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginBottom: 20, marginTop: -20, height: 60 }}>
          <Button width="30%" title="Shop More" fontFamily={FONT_Regular} titlecolor="white" onPress={() => {
            props.navigation.navigate("Home")
          }} />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log("Next Button")}
            style={{ marginTop: 30, }}
          >
            <LinearGradient colors={colors} style={styles.btnApply}>
              <Text style={styles.btnApplyText}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text></Text>
      </ScrollView >
    </View >
  )
}
export default MyCart


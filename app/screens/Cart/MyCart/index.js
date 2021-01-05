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
import { useSelector,useDispatch } from "react-redux"
import storageAuth from "../../../auth/useAuth"
import localStorage from "../../../auth/storage"
import AwesomeAlert from 'react-native-awesome-alerts';
import Slider from "../SliderScreen"
import constants from "../../../assets/stylesheet/Constants"
import { FONT_SEMIBOLD, FONT_BOLD } from './../../../config/Constant';
import colors from "../../../config/colors"
function MyCart(props) {
  const { user } = storageAuth()
  const [isGuest, setIsGuest] = React.useState(false)
  const [show, setShow] = React.useState(false);
  const cartItems = useSelector(state => state)
  const { currency } = props;
  let color = [Color.darkOrange, Color.darkYellow, Color.yellow];
  const checkIfUserGuesstOrNot = () => {
    localStorage.getKeyFromUserDefaults(constants.KEY_USER_GUEST).then((value) => {
      console.log(value)
      if (value) {
        setIsGuest(true)
      }
    });
  }
  const ConfrimAlert = () => {
    props.navigation.navigate("Login")
    setShow(false);
  };
  const hideAlert = () => {
    setShow(false);
  };
  const getTotalPrice = () => {
    console.log("Call The get Price")
    let total = 0;
    let totalQuantity=0

    cartItems.forEach((element) => {
      console.log(element)
      // total += element.price * 1;
      totalQuantity = element.qInCart;
    total=total+(element.price*totalQuantity);
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
          // props.removeCartItem(rowData.product)
          console.log("")
        }>
        <View style={{ marginRight: 23 }}>
          <FontAwesome name="trash" size={30} color="white" />
        </View>
      </TouchableOpacity>
    );
  };
  const handelNextButton = () => {
    checkIfUserGuesstOrNot()
    if (isGuest) {
      setShow(true)
    }
    else {
      props.navigation.navigate("OrderSlide")
      setShow(false)
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <AwesomeAlert
          show={show}
          showProgress={false}
          title="Information"
          message="Please login or register with us to continue"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={true}
          showConfirmButton={true}
          showCancelButton={false}
          cancelText="Dismiss"
          cancelButtonColor={colors.danger}
          confirmButtonColor={colors.primary}
          confirmText="OK"
          titleStyle={{ fontFamily: FONT_BOLD, fontSize: 17, color: colors.primary }}
          messageStyle={{ fontFamily: FONT_Regular, fontSize: 12, color: colors.black }}
          cancelButtonTextStyle={{ fontFamily: FONT_SEMIBOLD }}
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            ConfrimAlert();
          }}
        />
        <View style={css.row}>
          <Text style={[css.label, { color: "black" }]}>
            {Languages.TotalPrice}
          </Text>
          <Text style={css.value}>
            {Tools.getCurrecyFormatted(totalPrice, currency)}
          </Text>
        </View>
        <View style={styles.list}>
          {cartItems &&
            cartItems.map((item, index) => (
              <SwipeRow
                key={index.toString()}
                disableRightSwipe
                leftOpenValue={75}
                rightOpenValue={-75}>
                {renderHiddenRow(item, index)}
                <ProductItem
                  key={index.toString()}
                  viewQuantity
                  product={item}
                  onPress={() =>
                    console.log("Product View")
                    //props.onViewProduct({ product: item.product })
                  }
                  //item.qInCart pas krna hai
                  // quantity={item.quantity}
                  quantity={item.qInCart}
                  // variation={item.variation}
                  onRemove={props.removeCartItem}
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
            onPress={() => handelNextButton()}
            style={{ marginTop: 30, }}
          >
            <LinearGradient colors={color} style={styles.btnApply}>
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


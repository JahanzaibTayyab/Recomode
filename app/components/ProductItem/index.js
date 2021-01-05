/** @format */

import React, { PureComponent } from "react";
import { TouchableOpacity, Text, View, Image, Dimensions } from "react-native";

import ChangeQuantity from "../ChangeQuantity";
import styles from "./styles";
import { Tools } from "@common";
import { connect } from "react-redux"
import { useSelector,useDispatch } from "react-redux"

function ProductItem(props) {
  const {
    product,
    quantity,
    viewQuantity,
    onPress,
    onRemove,
    currency
  } = props;
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state)

  const onChangeQuantity = (quantity) => {
    // quantity=quantityIn
    console.log("Quantity of a specific Product",cartItems[cartItems.indexOf(product,0)].quantity)
    console.log("Quantity In",quantity)
    // console.log("quantityIn ",quantityIn)
    if (quantity <= cartItems[cartItems.indexOf(product,0)].quantity )
     {
      console.log("In if")
      product.qInCart=quantity
      props.incrementQuantity(props.product )
    } 
    else {
      console.log("In else")

      product.qInCart=quantity
      props.decrementQuantity(
        props.product
        );
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: "white" },
      ]}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => onPress({ product })}>
          <Image
            source={{ uri: product.img }}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View
          style={[
            styles.infoView,
            { width: Dimensions.get("window").width - 180 },
          ]}>
          <TouchableOpacity onPress={() => onPress({ product })}>
            <Text style={[styles.title, { color: "black" }]}>
              {product.title}
            </Text>
          </TouchableOpacity>
          <View style={styles.priceContainer}>
            <Text style={[styles.price, { color: "black" }]}>
              {Tools.getPriceIncluedTaxAmount(product, null, false, currency)}
            </Text>
          </View>
        </View>
        {viewQuantity && (
          <ChangeQuantity
            style={styles.quantity}
            quantity={quantity}
            onChangeQuantity={onChangeQuantity}
            itemId={product}
          />
        )}
      </View>

      {viewQuantity && (
        <TouchableOpacity
          style={styles.btnTrash}
          onPress={
            // () => onRemove(product)}
        () => dispatch({ type: 'REMOVE_FROM_CART', payload: product })}
            >
          <Image
            source={require("@images/ic_trash.png")}
            style={[styles.icon, { tintColor: "black" }]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  const { dispatch } = dispatchProps;
  const { actions } = require("../../redux/reducers/CartRedux");
  return {
    ...ownProps,
    ...stateProps,
    addCartItem: (product) => {
      actions.addCartItem(dispatch, product);
    },
    incrementQuantity:(product) => dispatch({ type: 'INCREMENT_QUANTITY', payload: product }),
    decrementQuantity:(product) => dispatch({ type: 'DECREMENT_QUANTITY', payload: product }),
    removeCartItem: (product) => {
      actions.removeCartItem(dispatch, product);
    },
  };
}

export default connect(
  null,
  undefined,
  mergeProps
)(ProductItem);

/** @format */

import React, { PureComponent } from "react";
import { TouchableOpacity, Text, View, Image, Dimensions } from "react-native";

import ChangeQuantity from "../ChangeQuantity";
import styles from "./styles";
import { Tools } from "@common";

function ProductItem(props) {
  const {
    product,
    quantity,
    viewQuantity,
    variation,
    onPress,
    onRemove,
    currency
  } = props;
  const onChangeQuantity = (quantityIn) => {
    if (quantity < quantityIn) {
      console.log("Product Add")
    } else {
      console.log("Product Removed")
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
            source={require("../../assets/images/Shirt1.png")}
            style={styles.image}
          />
        </TouchableOpacity>

        <View
          style={[
            styles.infoView,
            { width: Dimensions.get("window").width - 180 },
          ]}>
          <TouchableOpacity onPress={() => onPress({ product })}>
            <Text style={[styles.title, { color: "black" }]}>
              {product.name}
            </Text>
          </TouchableOpacity>
          <View style={styles.priceContainer}>
            <Text style={[styles.price, { color: "black" }]}>
              {Tools.getPriceIncluedTaxAmount(product, variation, false, currency)}
            </Text>
            {variation &&
              typeof variation.attributes !== "undefined" &&
              variation.attributes.map((variant) => {
                return (
                  <Text
                    key={variant.name}
                    style={styles.productVariant(text)}>
                    {variant.option}
                  </Text>
                );
              })}
          </View>
        </View>
        {viewQuantity && (
          <ChangeQuantity
            style={styles.quantity}
            quantity={quantity}
            onChangeQuantity={onChangeQuantity}
          />
        )}
      </View>

      {viewQuantity && (
        <TouchableOpacity
          style={styles.btnTrash}
          onPress={() => onRemove(product, variation)}>
          <Image
            source={require("@images/ic_trash.png")}
            style={[styles.icon, { tintColor: "black" }]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
// function mergeProps(stateProps, dispatchProps, ownProps) {
//   const { dispatch } = dispatchProps;
//   const { actions } = require("@redux/CartRedux");
//   return {
//     ...ownProps,
//     ...stateProps,
//     addCartItem: (product, variation) => {
//       actions.addCartItem(dispatch, product, variation);
//     },
//     removeCartItem: (product, variation) => {
//       actions.removeCartItem(dispatch, product, variation);
//     },
//   };
// }

export default ProductItem;

/** @format */

import React, { PureComponent } from "react";
import { TouchableOpacity, Text, View, Image, Dimensions } from "react-native";

import ChangeQuantity from "../ChangeQuantity";
import styles from "./styles";
import { Tools } from "@common";
import { connect } from "react-redux"

function ProductItem(props) {
  const {
    product,
    quantity,
    viewQuantity,
    onPress,
    onRemove,
    currency
  } = props;
  const onChangeQuantity = (quantityIn) => {
    if (quantity < quantityIn) {
      props.addCartItem(props.product);
    } else {
      props.removeCartItem(props.product);
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
          />
        )}
      </View>

      {viewQuantity && (
        <TouchableOpacity
          style={styles.btnTrash}
          onPress={() => onRemove(product)}>
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

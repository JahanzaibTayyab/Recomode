/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import { Images } from "@common";
import Button from "../../components/Button"
import styles from "./styles";

const PaymentEmpty = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <View style={styles.contentEmpty}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={Images.IconCart}
            style={styles.icon}
            resizeMode="contain"
            tintColor={"black"}
          />
          <Text style={[styles.title, { color: "black" }]}>Your Cart is Empty</Text>
          <Text style={[styles.message, { color: "black" }]}>Add a product to the shopping cart</Text>
        </View>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Button title="Shop Now" width="50%" titlecolor="white" onPress={() => {
            props.navigation.navigate("Feed")
          }} />
        </View>
      </View>


    </View>
  );
};

PaymentEmpty.propTypes = {
  onViewHome: PropTypes.func.isRequired,
};

export default PaymentEmpty;

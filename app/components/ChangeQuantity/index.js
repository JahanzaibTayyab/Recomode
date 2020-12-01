/** @format */

import React, { PureComponent } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Constants, Color } from "@common";

function ChangeQuantity(props) {
  const [quantity, setQuantity] = React.useState(props.quantity)

  React.useEffect(() => {
    console.log('Prop Received: ', props.quantity);
  }, [props.quantity])


  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.quantity !== "undefined") {
  //     this.setState({ quantity: nextProps.quantity });
  //   }
  // }

  const increase = () => {
    if (quantity < Constants.LimitAddToCart) {
      setQuantity(quantity + 1);
      props.onChangeQuantity(quantity);
    }
  };
  const reduced = () => {
    if (quantity > 1) {
      props.onChangeQuantity(setQuantity(quantity - 1));
    }
  };
  const hitSlop = { top: 20, right: 10, bottom: 20, left: 10 };
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={styles.btnUp}
        hitSlop={hitSlop}
        onPress={increase}>
        <FontAwesome name="sort-up" size={20} color="#b7c4cb" />
      </TouchableOpacity>
      <Text style={styles.text}>{quantity}</Text>
      <TouchableOpacity
        style={styles.btnDown}
        hitSlop={hitSlop}
        onPress={reduced}>
        <FontAwesome name="sort-down" size={20} color="#b7c4cb" />
      </TouchableOpacity>
    </View>
  );
}
ChangeQuantity.defaultProps = {
  quantity: 1,
  onChangeQuantity: () => { },
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    backgroundColor: "#f7f8fa",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d4dce1",
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: Constants.fontFamily,
    color: Color.blackTextPrimary,
  },
  btnUp: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnDown: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChangeQuantity;

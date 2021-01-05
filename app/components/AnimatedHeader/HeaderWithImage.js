/** @format */

/** @format */

import React, { PureComponent } from "react";
import { View, StyleSheet, Animated, I18nManager, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { NavBarBack, NavBarEmpty } from "@components";
import { Styles, withNavigation } from "@common";

const NavBarEmpty = () => (
  <View
    style={[
      Styles.Common.Row,
      I18nManager.isRTL ? { left: -10 } : { right: -5 },
      Platform.OS !== "ios" && { right: -12 },
    ]}
  />
);

const NavBarTitle = (props) => {
  const scrollAnimation =
    props && props.navigation
      ? props.navigation.getParam("animatedHeader")
      : new Animated.Value(1);

  return (
    <Animated.Text
      style={[Styles.Common.title, props.style, { opacity: scrollAnimation }]}>
      {props.title ? props.title.toUpperCase() : ""}
    </Animated.Text>
  );
};


class HeaderWithImage extends PureComponent {
  _renderHeaderAction = () => {
    return (
      <View style={styles.navbarBack}>
        <View style={styles.row}>
          <NavBarBack
            navigation={this.props.navigation}
            imageStyle={{ tintColor: "#FFF" }}
          />
        </View>
        <View style={[styles.row, { alignItems: "center" }]}>
          <NavBarTitle title={this.props.title} style={styles.titleHeader} />
        </View>
        <View style={styles.row}>
          <NavBarEmpty />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={Styles.Common.CheckoutHeader}>
          <Image
            source={require("@images/checkout/header_cart.png")}
            style={Styles.Common.CheckoutHeaderBg}
          />
        </View>
        <SafeAreaView
          style={{ backgroundColor: "transparent", flex: 1 }}
          forceInset={{ top: "always", bottom: "never" }}>
          {this._renderHeaderAction()}
          {this.props.content}
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbarBack: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    height: 30,
  },
  titleHeader: {
    color: "#FFF",
  },
  row: {
    flex: 1 / 3,
  },
});


export default withNavigation(HeaderWithImage)
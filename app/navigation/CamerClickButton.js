import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

function CameraClickButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="camera"
          color={colors.white}
          size={32}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 30,
    borderWidth: 10,
    bottom: 10,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
});

export default CameraClickButton;

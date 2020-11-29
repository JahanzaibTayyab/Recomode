/** @format */

import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

import { NewButton } from "@components";
import { Images } from "@common";
import styles from "./styles";

const Buttons = ({
  isAbsolute,
  onPrevious,
  isLoading,
  nextText,
  onNext,
  theme,
}) => {
  const {
    colors: { text, lineColor },
    dark: isDark,
  } = theme;

  return (
    <View
      style={[
        styles.bottomView,
        isAbsolute && styles.floatView,
        isDark && { borderTopColor: lineColor },
      ]}>
      <NewButton
        text="Back"
        icon={Images.icons.backs}
        color={isDark ? text : "#999"}
        style={[styles.btnBack, isDark && { backgroundColor: lineColor }]}
        textStyle={[styles.btnBackText, isDark && { color: text }]}
        onPress={onPrevious}
      />
      {isLoading ? (
        <View style={styles.btnBuy}>
          <Animatable.Text
            style={[styles.btnBuyText, isDark && { color: text }]}
            animation="pulse"
            iterationCount="infinite">
            "Loading"
          </Animatable.Text>
        </View>
      ) : (
          <NewButton
            text={nextText || "Next Step"}
            style={styles.btnBuy}
            textStyle={styles.btnBuyText}
            onPress={onNext}
          />
        )}
    </View>
  );
};

export default (Buttons);

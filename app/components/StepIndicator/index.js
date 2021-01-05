/** @format */

import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "./index_style.js";
import { Color, withTheme, } from "@common";

const widthScreen = Dimensions.get("window").width;

function StepIndicator(props) {
  const defaultStyles = {
    stepIndicatorSize: 30,
    borderPadding: 6,
    color: Color.checkout.stepActive,
  };
  const [customStyles, setCustomStyles] = React.useState(defaultStyles)
  const [stepStrokeWidth, setStepStrokeWidth] = React.useState(50)
  const [imageMargin, setImageMargin] = React.useState(defaultStyles.stepIndicatorSize / 2)
  const allIndicatorWidth =
    props.steps.length * customStyles.stepIndicatorSize +
    2 * props.steps.length * customStyles.borderPadding;
  const [marginContent, setMarginContent] = React.useState(widthScreen - allIndicatorWidth - (props.steps.length - 1) * stepStrokeWidth)
  const [containerWidth, setcontainerWidth] = React.useState(widthScreen)
  if (marginContent >= 50) {
    setcontainerWidth(widthScreen - marginContent + 50)
    setMarginContent(25);
  } else if (marginContent < 20) {
    (setMarginContent(10)),
      (setStepStrokeWidth(
        (widthScreen - allIndicatorWidth - marginContent * 2) /
        (props.steps.length - 1)));
  }
  const [labelWidth, setlabelWidth] = React.useState()
  if (Platform.OS === "ios") {
    setlabelWidth(
      marginContent * 2 +
      customStyles.stepIndicatorSize +
      2 * customStyles.borderPadding)
  } else {
    setlabelWidth(marginContent * 2);
  }

  const content = [];
  const label = [];

  for (let i = 0; i < props.steps.length; i++) {
    const item = props.steps[i];
    content.push(renderStepIndicator(i, item.icon));
    label.push(
      <Text
        key={i}
        style={[
          styles.label,
          { color: "black" },
          { width: labelWidth },
          i <= props.currentIndex,
        ]}>
        {item.label}
      </Text>
    );
    if (i != props.steps.length - 1) {
      content.push(renderProgressBar(i));
    }
  }
  const renderStepIndicator = (index, icon) => {
    const isCurrent = index === props.currentIndex;
    const indicatorContainer = {
      width:
        customStyles.stepIndicatorSize +
        customStyles.borderPadding * 2,
      height:
        customStyles.stepIndicatorSize +
        customStyles.borderPadding * 2,
      borderWidth: 0.5,
      borderColor: "#CED7DD",
      justifyContent: "center",
      alignItems: "center",
      borderRadius:
        (customStyles.stepIndicatorSize +
          customStyles.borderPadding * 2) /
        2,
    };
    const indicatorStyle = {
      backgroundColor:
        index < props.currentIndex
          ? customStyles.color : "#CED7DD",
      width: customStyles.stepIndicatorSize,
      height: customStyles.stepIndicatorSize,
      borderRadius: customStyles.stepIndicatorSize / 1,
    };

    const indicatorCurrent = {
      backgroundColor: "white",
      borderWidth: 1.5,
      borderColor: customStyles.color,
    };

    const imageSize =
      isCurrent === false
        ? customStyles.stepIndicatorSize - imageMargin
        : customStyles.stepIndicatorSize - imageMargin - 3;
    const imageStyle = {
      width: imageSize,
      height: imageSize,
      position: "absolute",
      top: imageMargin / 2,
      left: imageMargin / 2,
      tintColor: isCurrent == false ? "white" : customStyles.color,
    };

    return (
      <TouchableOpacity
        onPress={() =>
          index < props.currentIndex && props.onChangeTab(index)
        }
        style={[indicatorContainer]}
        key={`indicator-${index}`}>
        <View
          style={[
            indicatorStyle,
            isCurrent && indicatorCurrent,
          ]}>
          <Image resizeMode="contain" source={icon} style={imageStyle} />
        </View>
      </TouchableOpacity>
    );
  }
  const renderProgressBar = (index) => {
    const {
      openModal
    } = props;

    const progressBarContainer = {
      height: customStyles.borderPadding * 2 + 2,
      width: stepStrokeWidth,
      justifyContent: "center",
      zIndex: 3,
    };

    const progressBarBorder = {
      height: customStyles.borderPadding * 2 + 2,
      width: stepStrokeWidth + 4,
      position: "absolute",
      top: 0,
      left: -2,
      right: -2,
      backgroundColor: "#FFF",
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: "#CED7DD",
    };

    const progressBar = {
      width: stepStrokeWidth + customStyles.borderPadding * 2 + 3,
      height: 2,
      backgroundColor: customStyles.color,
      position: "absolute",
      top: customStyles.borderPadding,
      left: -customStyles.borderPadding,
    };
    return (
      <View style={[progressBarContainer]} key={`progress-${index}`}>
        {openModal === false && <View style={progressBarBorder()}>
          {index < props.currentIndex && <View style={progressBar} />}
        </View>}
      </View>
    );
  }
  return (
    <View
      style={[
        styles.container,
        { width: containerWidth, backdropColor: "white" },
      ]}>
      <View style={styles.labelContainer}>{label}</View>
      <View style={styles.indicatorContainer}>{content}</View>
    </View>
  );
}



export default (StepIndicator);

import React from 'react';
import {View, Text} from 'react-native';
import {
  FONT_Regular,
  FONT_SEMIBOLD,
  FONT_LIGHT,
  FONT_BOLD,
} from '../../../config/Constant';
import colors from '../../../config/colors';
export default function FeatureViewController(props) {
  return (
    <View style={{backgroundColor: colors.white, marginHorizontal: 20}}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text
          style={{
            fontFamily: FONT_SEMIBOLD,
            color: colors.black,
            fontSize: 14,
          }}>
          Color
        </Text>
        <Text
          style={{
            fontFamily: FONT_Regular,
            color: colors.black,
            fontSize: 12,
            marginHorizontal: 20,
          }}>
          {props.item.color}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text
          style={{
            fontFamily: FONT_SEMIBOLD,
            color: colors.black,
            fontSize: 14,
          }}>
          Sizes
        </Text>

        {props.item.size.map((item, index) => (
          <Text
            style={{
              fontFamily: FONT_Regular,
              color: colors.black,
              fontSize: 12,
              marginHorizontal: 20,
            }}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

import React from 'react';
import {View, Text} from 'react-native';
import {
  FONT_Regular,
  FONT_SEMIBOLD,
  FONT_LIGHT,
  FONT_BOLD,
} from '../../../config/Constant';
import colors from '../../../config/colors';
export default function DiscripationViewController() {
  return (
    <View style={{marginHorizontal: 20, marginTop: 10}}>
      <Text
        style={{fontFamily: FONT_Regular, color: colors.black, fontSize: 12}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </Text>
    </View>
  );
}

import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

import colors from '../../config/colors';
export default function Outfit(props) {
  const {imagewidth} = props;
  return (
    <View
      style={{
        //margin: 3,
        flex: 1,
        overflow: 'hidden',
        padding: 3,
        backgroundColor: colors.black,
      }}>
      <Image
        source={props.image}
        style={{width: imagewidth, height: 200}}
        resizeMode="cover"
        on
      />
    </View>
  );
}

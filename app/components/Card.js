import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import AIcon from 'react-native-vector-icons/MaterialIcons';

import colors from '../config/colors';
import { FONT_SEMIBOLD, FONT_Regular, FONT_MEDIUM } from '../config/Constant';
//import Text from '../components/Text';
function Card({ title, subTitle, image, index, onPress, brandlogo }) {
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [isClick, setClick] = useState(false);
  return (
    <TouchableOpacity style={styles.card}
      onPress={onPress}
    >
      <View style={{ position: "absolute", alignSelf: "flex-end", top: 5, right: 10 }}>
        <TouchableOpacity
          onPress={() => {
            setLiked(!liked);
            setCounter(index);
          }}
        >
          <AIcon
            name={liked && index == counter ? 'favorite' : 'favorite-border'}
            size={25}
            color={liked && index == counter ? 'red' : 'black'}
          >
          </AIcon>
        </TouchableOpacity>

      </View>
      <View style={styles.ImageContainer}>
        <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </Text>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,

  },
  ImageContainer: {
    marginTop: 20,
    height: 180,
    width: "100%",
    overflow: "hidden"
  },
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: colors.COLOR_BORDER,
    borderWidth: 0,
    height: 250,
    borderColor: colors.COLOR_BORDER,
  },
  detailsContainer: {
    marginHorizontal: 20,
    marginTop: 5
  },
  image: {
    width: "100%",
    height: "100%",
  },
  subTitle: {
    fontFamily: FONT_MEDIUM, fontSize: 12, color: "#333333"
  },
  title: {
    marginBottom: 5,
    fontFamily: FONT_SEMIBOLD,
    color: colors.bitblue
  },
});

export default Card;

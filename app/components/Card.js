import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import AIcon from 'react-native-vector-icons/MaterialIcons';

import colors from '../config/colors';
import { FONT_SEMIBOLD, FONT_Regular, FONT_MEDIUM } from '../config/Constant';
//import Text from '../components/Text';
function Card({ title, subTitle, image, index, onPress, brandlogo }) {
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={styles.logoImage}>
        <Image
          source={{ uri: brandlogo }}
          resizeMode="contain"
          style={{
            position: 'absolute',
            bottom: 10,
            width: "80%",
            height: 80,
          }}
        />
      </View>
      <TouchableWithoutFeedback
        onPress={onPress}
      >
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: image }} resizeMode='contain' />
          <View style={styles.detailsContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                setLiked(!liked);
                setCounter(index);
              }}
            >
              <View style={{
                width: 40, height: 40, borderRadius: 50, position: "absolute", right: 0, bottom: 3,
                shadowColor: colors.COLOR_FILLED,
                shadowOpacity: 0.9,
                elevation: 5,
                shadowRadius: 10,
                shadowOffset: { width: 1, height: 50 },
                alignItems: "center", justifyContent: "center",
                backgroundColor: colors.bitblue
              }}>
                <AIcon
                  name='favorite'
                  size={25}
                  color={liked && index == counter ? 'red' : 'white'}
                >
                </AIcon>
              </View>
            </TouchableWithoutFeedback>

            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,

  },
  logoImage: {
    position: "absolute",
    right: 25,
    top: 90,
    // zIndex: 100,
    backgroundColor: 'white',
    borderColor: colors.COLOR_BORDER,
    borderWidth: 0,
    justifyContent: 'center',
    shadowColor: colors.COLOR_FILLED,
    shadowOpacity: 0.9,
    shadowRadius: 40,
    elevation: 80,
    shadowOffset: { width: 1, height: 50 },
    overflow: "hidden",
    backgroundColor: "transparent",
    width: 50,
    height: 100
  },
  card: {
    overflow: "hidden",
    borderRadius: 20,
    //zIndex: -40,
    backgroundColor: 'white',
    borderColor: colors.COLOR_BORDER,
    borderWidth: 0,
    justifyContent: 'center',
    shadowColor: colors.COLOR_FILLED,
    shadowOpacity: 0.9,
    elevation: 40,
    shadowRadius: 50,
    shadowOffset: { width: 1, height: 50 },
    marginHorizontal: 50,
    marginBottom: 10,
    // zIndex: 1
  },
  detailsContainer: {
    marginHorizontal: 25,
    marginBottom: 10,
    zIndex: -1
  },
  image: {
    marginTop: 10,
    width: "100%",
    height: 200,
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

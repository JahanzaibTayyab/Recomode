import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import Animated from 'react-native-reanimated';

import colors from '../../config/colors';
import Button from '../../components/Button';
const {width, height} = Dimensions.get('window');
function WelcomeView() {
  const picture = {
    uri: require('../../assets/images/4.png'),
    width: 480,
    height: 450,
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slide]}>
        <Animated.View style={styles.image}>
          <Image
            source={picture.uri}
            style={{
              width: width - 75,
              height: ((width - 75) * picture.height) / picture.width,
            }}
          />
        </Animated.View>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor: '#F4F0EF'}}
        />
        <Animated.View style={[styles.footerContent]}>
          <Animated.View style={styles.contentdata}>
            <Text style={styles.subtitle}>Let's get started</Text>
            <Text style={styles.description}>
              Login to your account below or signup for an amazing experience
            </Text>
            <Button title="Have an account? Login" titlecolor="white" />
            <Button title="Join us , it's Free" buttoncolor="secondary" />
            <Button title="Forgot password?" buttoncolor="transparent" />
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentdata: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
    bottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    marginBottom: 18,
    lineHeight: 16,
    color: 'rgba(12, 13, 52,0.7)',
    textAlign: 'center',
  },
  footerContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 75,
    paddingTop: 40,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderBottomRightRadius: 75,
  },
  slide: {
    height: 0.47 * height,
    borderBottomRightRadius: 75,
    backgroundColor: '#F4F0EF',
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'SFProText-Semibold',
    marginBottom: 12,
    lineHeight: 30,
    color: colors.bitblue,
  },
  footer: {
    flex: 1,
  },
});
export default WelcomeView;

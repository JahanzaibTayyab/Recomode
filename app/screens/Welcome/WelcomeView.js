import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground } from 'react-native';
import Animated from 'react-native-reanimated';

import Button from '../../components/Button';
import styles from './styles';
import routes from '../../navigation/routes';

const { width } = Dimensions.get('window');

function WelcomeView(props) {
  const picture = {
    uri: require('../../assets/images/lgs.jpg'),
    width: 1080,
    height: 1230,
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slide]}>
        <Animated.View style={styles.image}>
          <ImageBackground
            blurRadius={5}
            source={require("../../assets/images/lgs.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
          {/* <Image
            source={picture.uri}
            resizeMode="contain"
            style={{
              width: width - 75,
              height: ((width - 75) * picture.height) / picture.width,
            }}
          /> */}
        </Animated.View>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white' }}
        >
          <ImageBackground
            blurRadius={5}
            source={require("../../assets/images/lgs.jpg")}
            style={{ width: "50%", height: "100%" }}
          />
        </Animated.View>
        <Animated.View style={[styles.footerContent]}>
          <Animated.View style={styles.contentdata}>
            <Text style={styles.subtitle}>Let's get started</Text>
            <Text style={styles.description}>
              Login to your account below or signup for an amazing experience
            </Text>
            <Button
              title="Have an account? Login"
              titlecolor="white"
              onPress={() => {
                props.navigation.navigate(routes.LOGIN);
              }}
            />
            <Button
              title="Join us , it's Free"
              buttoncolor="lightgrey"
              onPress={() => {
                props.navigation.navigate(routes.REGISTER);
              }}
            />
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}

export default WelcomeView;

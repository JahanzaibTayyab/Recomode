import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground } from 'react-native';
import Animated from 'react-native-reanimated';

import Button from '../../components/Button';
import styles from './styles';
import routes from '../../navigation/routes';
import { ic_logo, ic_imagebackgroud } from "../../screens/helper/constants"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import useAuth from './../../auth/useAuth';
import constants from "../../assets/stylesheet/Constants"
import { constant } from 'lodash';
const { width } = Dimensions.get('window');

function WelcomeView(props) {
  const authFromLocal = useAuth()
  const picture = {
    uri: require('../../assets/images/lgs.jpg'),
    width: 1080,
    height: 1230,
  };
  const gussesUser = () => {
    authFromLocal.guesetUser(constants.KEY_USER_GUEST, "guest")
    const userData = {
      email: "",
      fullName: "Guest User"
    }
    props.navigation.navigate(routes.TAKEIMAGE, { userData });
  }
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slide]}>
        <Animated.View style={styles.image}>
          <ImageBackground
            blurRadius={9}
            source={ic_imagebackgroud}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={{ overflow: "hidden", width: 330, height: 300, alignSelf: "center", justifyContent: "center" }}>
              <Image
                source={ic_logo}
                style={{ height: 100, width: "100%" }}
                resizeMod="contain"
              />
            </View>

          </ImageBackground>
        </Animated.View>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white' }}
        >
          <ImageBackground
            blurRadius={9}
            source={ic_imagebackgroud}
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
              title="Unlock"
              titlecolor="white"
              buttoncolor="medium"
              width="80%"
              onPress={() => gussesUser()}
            />
            <Button
              title="Have an account? Login"
              titlecolor="white"
              width="80%"
              onPress={() => {
                props.navigation.navigate(routes.LOGIN);
              }}
            />
            <Button
              title="Join us , it's Free"
              buttoncolor="lightgrey"
              titlecolor="primary"
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

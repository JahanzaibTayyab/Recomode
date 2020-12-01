import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import * as yup from 'yup';
import LottieView from "lottie-react-native";

import colors from '../../config/colors';
import { Form, FormField, SubmitButton } from '../../components/form';
import styles from './styles';
import { ic_facebook, ic_google, ic_Register } from '../helper/constants';
import SocialContainer from '../../components/SocialContainer';
import routes from '../../navigation/routes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ActivityIndicator from "../../components/ActivityIndicator"
import { FONT_Regular, FONT_SEMIBOLD, FONT_LIGHT, FONT_BOLD } from "../../config/Constant"
import constants from './../../assets/stylesheet/Constants';
import localStorage from "../../auth/storage"
import useAuth from "../../auth/useAuth";


const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).label('Password'),
});

function RegisterView(props) {

  const [icon, setIcon] = useState('eye-off-outline');
  const [hidePassword, setHidePassword] = useState(true);
  const [push, setpush] = useState(false);
  const [showActivityIndicator, setActivityIndicator] = useState(false);
  const [showPopUp, setPopUp] = useState(false);
  const [isGuest, setIsGuest] = useState(false)
  const [data, setData] = useState(null)
  const StorageAuth = useAuth();
  const checkIfUserGuesstOrNot = () => {
    localStorage.getKeyFromUserDefaults(constants.KEY_USER_GUEST).then((value) => {
      console.log(value)
      if (value) {
        setIsGuest(true)
        localStorage.getJSONFromUserDefaults(constants.KEY_USERINFO).then((user) => {
          if (user) {
            setData(user)
          }
        })
      }
    });
  }
  const _changeIcon = () => {
    icon !== 'eye-off-outline'
      ? (setIcon('eye-off-outline'), setHidePassword(true))
      : (setIcon('eye-outline'), setHidePassword(false));
  };
  React.useEffect(() => {
    checkIfUserGuesstOrNot()
  }, []); //Pass Array as second argument
  const handleSubmit = async (data, id) => {
    const userData = data;
    await firestore().collection('users').doc(id).set(data).then((response) => {
      setActivityIndicator(false);
      setPopUp(true)
      setTimeout(function () {
        userData['id'] = id;
        props.navigation.navigate(routes.TAKEIMAGE, { userData });
      }, 4000)
    }).catch((error) => {
      alert(error)
    })
  };
  const dataUpdateFromGuestToRegister = () => {
    setData({
      ...data,
      id: userid,
      email: email,
      fullName: name
    })
    localStorage.removeToken(constants.KEY_USER_GUEST)
    localStorage.removeToken(constants.KEY_USERINFO)
    localStorage.saveJSONInUserDefaults(constants.KEY_USER_EMAIL, email)
    StorageAuth.logIn(constants.KEY_USERINFO, userData)
  }
  const guestUserForward = (email, name, userid) => {
    {
      data != null ? dataUpdateFromGuestToRegister : null
    }

  }
  const registerPress = async ({ email, password, name }) => {
    setActivityIndicator(true)
    await auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const userid = response.user.uid
        const data = {
          email,
          fullName: name
        };
        console.log(data)
        { isGuest ? guestUserForward(email, name, userid) : handleSubmit(data, userid) }
      })
      .catch((error) => {
        alert(error)
      });
  };
  return (
    <>
      <ActivityIndicator visible={showActivityIndicator} />
      {showPopUp &&
        <View style={styles.overlay}>
          <LottieView
            autoPlay
            loop
            source={require("../../assets/animations/3409-done.json")}
          />
        </View>
      }
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          enabled={push}>
          <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.bitblue} />
            <View style={styles.upperbox}>
              <View style={styles.innerbox}>
                <Text style={styles.titleheader}>Create Account</Text>
              </View>
            </View>
            <View style={styles.contentdata}>
              <View style={styles.registercontainer}>
                <Image
                  style={styles.icon}
                  source={ic_Register}
                  resizeMode="contain"
                />
              </View>

              <Form
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values) => registerPress(values)}
                validationSchema={validationSchema}>
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="account"
                  keyboardType="default"
                  name="name"
                  placeholder="Name"
                  textContentType="name"
                  width="90%"
                  onFocus={() => {
                    setpush(false);
                  }}
                />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  keyboardType="email-address"
                  name="email"
                  placeholder="Email"
                  textContentType="emailAddress"
                  width="90%"
                  onFocus={() => {
                    setpush(true);
                  }}
                />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  name="password"
                  showpassword={icon}
                  onPress={_changeIcon}
                  placeholder="Password"
                  secureTextEntry={hidePassword}
                  textContentType="password"
                  width="90%"
                />
                <SubmitButton title="Register" titlecolor="white" width="70%" />
              </Form>
              <Text
                style={{
                  fontFamily: 'SFProText-Semibold',
                  //padding: 10,
                  marginTop: 20,
                  color: colors.medium,
                }}>
                OR be Social
            </Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.innerfooter}>
                <SocialContainer
                  {...props}
                />
                <View style={styles.footerdata}>
                  <Text style={styles.footertitle}>
                    Already Have an account ?
                  <TouchableWithoutFeedback
                      onPress={() => props.navigation.navigate(routes.LOGIN)}>
                      <Text style={{ color: colors.primary, fontFamily: FONT_SEMIBOLD }}> Login here!</Text>
                    </TouchableWithoutFeedback>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}

export default RegisterView;

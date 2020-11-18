import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar
} from 'react-native';
import * as yup from 'yup';


import colors from '../../config/colors';
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from '../../components/form';
import styles from './styles';
import { ic_login } from '../helper/constants';
import SocialContainer from '../../components/SocialContainer';
import routes from '../../navigation/routes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AuthContext from '../../auth/context';
import ActivityIndicator from "../../components/ActivityIndicator"

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).label('Password'),
});

function LoginView(props) {
  const [icon, setIcon] = useState('eye-off-outline');
  const [hidePassword, setHidePassword] = useState(true);
  const [push, setpush] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [showActivityIndicator, setActivityIndicator] = useState(false);

  //Calling UserContext to set User
  const authContext = useContext(AuthContext)


  const _changeIcon = () => {
    icon !== 'eye-off-outline'
      ? (setIcon('eye-off-outline'), setHidePassword(true))
      : (setIcon('eye-outline'), setHidePassword(false));
  };

  const userdata = async (uid) => {
    const userDocument = await firestore().collection('users').doc(uid)
      .get()
      .then(firestoreDocument => {
        if (!firestoreDocument.exists) {
          setLoginFailed(true);
          return;
        }
        const user = firestoreDocument.data()
        console.log(user)
        props.navigation.navigate(routes.TAKEIMAGE);
        //authContext.setUser(user);
      })
      .catch(error => {
        alert(error)
      });
  }
  const loginpress = async (values) => {
    setActivityIndicator(true)
    auth().signInWithEmailAndPassword(values.email, values.password)
      .then((response) => {
        const uid = response.user.uid
        console.log(uid)
        userdata(uid)
      })
      .catch(error => {
        alert(error)
      })
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={push}>
        <View style={styles.container}>
          <ActivityIndicator visible={showActivityIndicator} />
          <StatusBar barStyle="light-content" backgroundColor={colors.bitblue} />
          <View style={styles.upperbox}>
            <View style={styles.innerbox}>
              <Text style={styles.titleheader}>Welcome Back! </Text>
            </View>
          </View>
          <View style={styles.contentdata}>
            <View style={styles.registercontainer}>
              <Image
                style={styles.icon}
                source={ic_login}
                resizeMode="contain"
              />
            </View>

            <ErrorMessage
              error="Invalid email and/or password"
              visible={loginFailed}
            />
            <Form
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => loginpress(values)}
              validationSchema={validationSchema}
            >
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
              <View style={{ flexDirection: "row", alignSelf: "flex-end", right: 10 }}>
                <TouchableWithoutFeedback onPress={() => {
                  props.navigation.navigate(routes.FORGETPASSWORD)
                }}>
                  <Text style={styles.forgettitle}>forget password?</Text>
                </TouchableWithoutFeedback>
              </View>
              <SubmitButton title="Login" titlecolor="white" width="70%" />
            </Form>
            <Text
              style={{
                fontFamily: 'SFProText-Semibold',
                top: 30,
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
                  Don't Have an account ?
                  <TouchableWithoutFeedback
                    onPress={() => props.navigation.navigate(routes.REGISTER)}>
                    <Text style={{ color: colors.primary }}> SignUp here!</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default LoginView;

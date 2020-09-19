import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  SafeAreaView,
} from 'react-native';
import * as yup from 'yup';

import colors from '../../config/colors';
import {Form, FormField, SubmitButton} from '../../components/form';
import styles from './styles';
import {ic_login} from '../helper/constants';
import SocialContainer from '../../components/SocialContainer';
const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

function LoginView(props) {
  const [icon, setIcon] = useState('eye-off-outline');
  const [hidePassword, setHidePassword] = useState(true);
  const [push, setpush] = useState(false);
  const _changeIcon = () => {
    icon !== 'eye-off-outline'
      ? (setIcon('eye-off-outline'), setHidePassword(true))
      : (setIcon('eye-outline'), setHidePassword(false));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        enabled={push}>
        <View style={styles.container}>
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

            {/* <Text style={styles.subtitle}>
            Let's us know what is your name, {'\n'}email and your password!
          </Text> */}
            <Form
              initialValues={{email: '', password: ''}}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}>
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
              <SubmitButton title="Login" titlecolor="white" width="70%" />
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
              <SocialContainer />

              <View style={styles.footerdata}>
                <Text style={styles.footertitle}>
                  Login using Facebook or Google account!
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

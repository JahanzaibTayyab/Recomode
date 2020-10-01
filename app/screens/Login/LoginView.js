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
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from '../../components/form';
import styles from './styles';
import {ic_login} from '../helper/constants';
import SocialContainer from '../../components/SocialContainer';
import routes from '../../navigation/routes';

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

function LoginView(props) {
  const [icon, setIcon] = useState('eye-off-outline');
  const [hidePassword, setHidePassword] = useState(true);
  const [push, setpush] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const _changeIcon = () => {
    icon !== 'eye-off-outline'
      ? (setIcon('eye-off-outline'), setHidePassword(true))
      : (setIcon('eye-outline'), setHidePassword(false));
  };

  const loginpress = (values) => {
    console.log(values);
    props.navigation.navigate(routes.TAKEIMAGE);
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

            <ErrorMessage
              error="Invalid email and/or password"
              visible={loginFailed}
            />
            <Form
              initialValues={{email: '', password: ''}}
              onSubmit={(values) => loginpress(values)}
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
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  top: -70,
                  right: 30,
                }}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    props.navigation.navigate(routes.FORGETPASSWORD)
                  }>
                  <Text
                    style={{
                      color: colors.primary,
                      fontFamily: 'SFProText-Regular',
                    }}>
                    Forget password ?
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </Form>
            <Text
              style={{
                fontFamily: 'SFProText-Semibold',
                top: 50,
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
                  Don't Have an account ?
                  <TouchableWithoutFeedback
                    onPress={() => props.navigation.navigate(routes.REGISTER)}>
                    <Text style={{color: colors.primary}}> SignUp here!</Text>
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

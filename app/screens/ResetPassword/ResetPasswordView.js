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
  password: yup.string().required().min(4).label('Password'),
});

function ResetPasswordView() {
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
              <Text style={styles.titleheader}>Reset Password! </Text>
            </View>
          </View>
          <View style={styles.contentdata}>
            <Form
              initialValues={{password: ''}}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}>
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
              <SubmitButton
                title="Reset Password"
                titlecolor="white"
                width="70%"
              />
            </Form>
          </View>
          <View style={styles.footer}>
            <View style={styles.innerfooter}></View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default ResetPasswordView;

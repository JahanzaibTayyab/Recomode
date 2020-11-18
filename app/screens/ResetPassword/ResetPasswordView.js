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
  StatusBar
} from 'react-native';
import * as yup from 'yup';
import AwesomeAlert from 'react-native-awesome-alerts';

import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from '../../components/form';
import styles from './styles';
import routes from '../../navigation/routes';
import colors from '../../config/colors';

const validationSchema = yup.object().shape({
  password: yup.string().required().min(4).label('Password'),
  confrim: yup.string().required().min(4).label('ConfrimPassword'),
});

function ResetPasswordView(props) {
  const [icon, setIcon] = useState('eye-off-outline');
  const [hidePassword, setHidePassword] = useState(true);
  const [push, setpush] = useState(false);
  const [confirmFailed, setConfrimFailed] = useState(false);
  const [show, setShow] = useState(false);

  const _changeIcon = () => {
    icon !== 'eye-off-outline'
      ? (setIcon('eye-off-outline'), setHidePassword(true))
      : (setIcon('eye-outline'), setHidePassword(false));
  };

  const buttonHandel = (values) => {
    console.log(values);
    if (values.password === values.confrim) {
      setShow(true);
    } else {
      setConfrimFailed(true);
    }
  };
  const ConfrimAlert = () => {
    setShow(false);
    props.navigation.navigate(routes.LOGIN);
  };
  const hideAlert = () => {
    setShow(false);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={push}>
        <AwesomeAlert
          show={show}
          showProgress={false}
          title="Password Updated"
          message="Please Login again to continue"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor={colors.primary}
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            ConfrimAlert();
          }}
        />
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={colors.bitblue} />
          <View style={styles.upperbox}>
            <View style={styles.innerbox}>
              <Text style={styles.titleheader}>Reset Password! </Text>
            </View>
          </View>
          <View style={styles.contentdata}>
            <ErrorMessage
              error="Password did not match.Please try Again"
              visible={confirmFailed}
            />
            <Form
              initialValues={{ password: '', confrim: '' }}
              onSubmit={(values) => buttonHandel(values)}
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
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="confrim"
                showpassword={icon}
                onPress={_changeIcon}
                placeholder="Confrim Password"
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

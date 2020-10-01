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

import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from '../../components/form';
import styles from './styles';
import routes from '../../navigation/routes';

const validationSchema = yup.object().shape({
  password: yup.string().required().min(4).label('Password'),
  confrim: yup.string().required().min(4).label('ConfrimPassword'),
});

function ResetPasswordView(props) {
  const [icon, setIcon] = useState('eye-off-outline');
  const [hidePassword, setHidePassword] = useState(true);
  const [push, setpush] = useState(false);
  const [confirmFailed, setConfrimFailed] = useState(false);

  const _changeIcon = () => {
    icon !== 'eye-off-outline'
      ? (setIcon('eye-off-outline'), setHidePassword(true))
      : (setIcon('eye-outline'), setHidePassword(false));
  };

  const buttonHandel = (values) => {
    console.log(values);
    if (values.password === values.confrim)
      props.navigation.navigate(routes.LOGIN);
    else {
      setConfrimFailed(true);
    }
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
            <ErrorMessage
              error="Password did not match.Please try Again"
              visible={confirmFailed}
            />
            <Form
              initialValues={{password: '', confrim: ''}}
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

import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import * as yup from 'yup';

import {Form, FormField, SubmitButton} from '../../components/form';
import styles from './styles';
import {ic_Email} from './../helper/constants';
import routes from '../../navigation/routes';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
});

function ForgetPasswordView(props) {
  const [enableshifting, setenableshifting] = useState(false);

  const buttonHandling = (values) => {
    console.log(values);
    props.navigation.navigate(routes.CODEENTER);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        enabled={enableshifting}>
        <View style={styles.container}>
          <View style={styles.upperbox}>
            <View style={styles.innerbox}>
              <Text style={styles.titleheader}>Forget Password</Text>
            </View>
          </View>
          <View style={styles.contentdata}>
            <Image style={styles.icon} source={ic_Email} />
            <Text style={styles.subtitle}>
              Enter the email address associated {'\n'} with your account{' '}
            </Text>
            <Form
              initialValues={{email: ''}}
              onSubmit={(values) => buttonHandling(values)}
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
                onFocus={() => setenableshifting(true)}
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

export default ForgetPasswordView;

import React, {useState} from 'react';
import {Text, View, Image, KeyboardAvoidingView} from 'react-native';
import * as yup from 'yup';

import {Form, FormField, SubmitButton} from '../../components/form';
import styles from './styles';
import {ic_Email} from './../helper/constants';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
});

function ForgetPasswordView(props) {
  const [enableshifting, setenableshifting] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.upperbox}>
        <View style={styles.innerbox} />
      </View>
      <KeyboardAvoidingView style={styles.contentdata} behavior="position">
        <View style={styles.contentdata}>
          <Text style={styles.titleheader}>Forget Password?</Text>
          <Image style={styles.icon} source={ic_Email} />
          <Text style={styles.subtitle}>
            Enter the email address associated with your account{' '}
          </Text>
          <Form
            initialValues={{email: ''}}
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
            />
            <SubmitButton
              title="Reset Password"
              titlecolor="white"
              width="70%"
            />
          </Form>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <View style={styles.innerfooter}></View>
      </View>
    </View>
  );
}

export default ForgetPasswordView;

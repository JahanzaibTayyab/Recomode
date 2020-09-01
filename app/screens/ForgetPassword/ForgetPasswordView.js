import React, {useState} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import * as yup from 'yup';

import colors from '../../config/colors';
import {Form, FormField, SubmitButton} from '../../components/form';
import styles from './styles';
import {ic_facebook, ic_google} from '../helper/constants';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
});

function ForgetPasswordView(props) {
  //   const [icon, setIcon] = useState('eye-off-outline');
  //   const [hidePassword, setHidePassword] = useState(true);
  //   const _changeIcon = () => {
  //     icon !== 'eye-off-outline'
  //       ? (setIcon('eye-off-outline'), setHidePassword(true))
  //       : (setIcon('eye-outline'), setHidePassword(false));
  //   };
  return (
    <View style={styles.container}>
      <View style={styles.upperbox}>
        <View style={styles.innerbox} />
      </View>
      <View style={styles.content}>
        <View style={styles.contentdata}>
          <View style={styles.titlecontainer}>
            <Text style={styles.titleheader}>Forget Password?</Text>
            <Text style={styles.subtitle}>
              Enter the email address associated with your account{' '}
            </Text>
          </View>
          <View style={styles.contentdata2}>
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
              />
              <SubmitButton
                title="Reset Password"
                titlecolor="white"
                width="70%"
              />
            </Form>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.innerfooter}>
          {/* <View style={styles.logocontainer}>
            <View style={styles.logoinnercontainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log('FaceBook');
                }}>
                <Image
                  resizeMode="contain"
                  source={ic_facebook}
                  style={styles.logoimage}
                />
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.logoinnercontainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log('Google');
                }}>
                <Image
                  resizeMode="contain"
                  source={ic_google}
                  style={styles.logoimage}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.footerdata}>
            <Text style={styles.footertitle}>
              Already Have an account ?
              <TouchableWithoutFeedback onPress={() => console.log('Login')}>
                <Text style={{color: colors.primary}}> Login here!</Text>
              </TouchableWithoutFeedback>
            </Text>
          </View> */}
        </View>
      </View>
    </View>
  );
}

export default ForgetPasswordView;

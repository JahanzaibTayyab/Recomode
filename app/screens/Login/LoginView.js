import React, {useState} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import * as yup from 'yup';
import {CheckBox} from 'react-native-elements';

import colors from '../../config/colors';
import {Form, FormField, SubmitButton} from '../../components/form';
import styles from './styles';
import {ic_facebook, ic_google} from '../helper/constants';
// import Text from '../../config/styles';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

function LoginView(props) {
  const [icon, setIcon] = useState('eye-off-outline');
  const [checked, setChecked] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  //   var ischeck = true;
  const _changeIcon = () => {
    icon !== 'eye-off-outline'
      ? (setIcon('eye-off-outline'), setHidePassword(true))
      : (setIcon('eye-outline'), setHidePassword(false));
  };
  const onChangeCh = () => {
    this.setChecked({checked: !this.checked});
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperbox}>
        <View style={styles.innerbox} />
      </View>
      <View style={styles.content}>
        <View style={styles.contentdata}>
          <View style={styles.titlecontainer}>
            <Text style={styles.titleheader}>Welcome Back!</Text>
            <Text style={styles.subtitle}>
              Use your credentials below and Login to your Account!
            </Text>
          </View>
          <View style={styles.contentdata2}>
            <Form
              initialValues={{email: '', password: ''}}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}>
              <FormField
                name="email"
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress"
                // style={{width: '90%'}}
                width="90%"
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
                // style={{width: '90%'}}
              />
              <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                <CheckBox
                  style={{alignSelf: 'flex-start'}}
                  title="Remember me."
                  onChange={(checked) => this.props.setChecked(!checked)}
                />
                <TouchableWithoutFeedback
                  style={{alignSelf: 'flex-end'}}
                  onPress={() => console.log('Forget Password')}>
                  <Text style={{color: colors.primary, padding: 18}}>
                    Forget Password?
                  </Text>
                </TouchableWithoutFeedback>
              </View>
              <SubmitButton title="Login" titlecolor="white" width="70%" />
              <Text
                style={{
                  paddingTop: 10,
                  color: colors.dark,
                  fontSize: 18,
                  fontFamily: 'SFProText-Bold',
                }}>
                OR
              </Text>
              <Text style={{paddingTop: 10}}>
                Cotinue with Google or Facebook!
              </Text>
            </Form>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.innerfooter}>
          <View style={styles.logocontainer}>
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
              Don't Have any Account?
              <TouchableWithoutFeedback onPress={() => console.log('SignUp!')}>
                <Text style={{color: colors.primary}}> SignUp here!</Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginView;

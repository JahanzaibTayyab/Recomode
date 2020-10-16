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
import {ic_facebook, ic_google, ic_Register} from '../helper/constants';
import SocialContainer from '../../components/SocialContainer';
import routes from '../../navigation/routes';
// import {f,auth} from '../../config/config';

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).label('Password'),
});

function RegisterView(props) {
  const[uid,setUid]=useState('');
  const [icon, setIcon] = useState('eye-off-outline');
  const [hidePassword, setHidePassword] = useState(true);
  const [push, setpush] = useState(false);

  const _changeIcon = () => {
    icon !== 'eye-off-outline'
      ? (setIcon('eye-off-outline'), setHidePassword(true))
      : (setIcon('eye-outline'), setHidePassword(false));
  };

  const handleSubmit = async (data) => {
    
  };

  const registerPress = async ({email,password,name}) => {
    // console.log(values);
    auth.createUserWithEmailAndPassword(email,password)
            .then((response) => {
                const uidg = response.user.uid
               setUid(uidg)
                console.log(uid)
                const data = {
                    id: uid,
                    email,
                    name
                };
                console.log(data)
                 const usersRef = f.firestore().collection('users').doc(uid).set(data)
                 console.log('Set: ', usersRef);
                //  .then(()=>{
                //   console.log("yha aya ")
                // }).catch((error)=>{
                //   alert(error)
                // })
             })
            .catch((error) => {
                alert(error)
        });
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
              <Text style={styles.titleheader}>Create Account</Text>
            </View>
          </View>
          <View style={styles.contentdata}>
            <View style={styles.registercontainer}>
              <Image
                style={styles.icon}
                source={ic_Register}
                resizeMode="contain"
              />
            </View>

            <Form
              initialValues={{name: '', email: '', password: ''}}
              onSubmit={(values) => registerPress(values)}
              validationSchema={validationSchema}>
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                keyboardType="default"
                name="name"
                placeholder="Name"
                textContentType="name"
                width="90%"
                onFocus={() => {
                  setpush(false);
                }}
              />
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
              <SubmitButton title="Register" titlecolor="white" width="70%" />
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
                  Already Have an account ?
                  <TouchableWithoutFeedback
                    onPress={() => props.navigation.navigate(routes.LOGIN)}>
                    <Text style={{color: colors.primary}}> Login here!</Text>
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

export default RegisterView;

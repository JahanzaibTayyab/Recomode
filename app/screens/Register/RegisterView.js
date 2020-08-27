import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import colors from '../../config/colors';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Screen from '../../components/Screen';
import Icon from '../../components/Icon';

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),

  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});
function RegisterView(props) {
  return (
    <View style={styles.FScr}>
      <View style={styles.V1C}></View>
      <View style={styles.V2C}>
        <Text
          style={{
            fontFamily: 'SFProText-Bold',
            fontSize: 20,
            // paddingHorizontal: 100,
          }}>
          Create Account
        </Text>
        <Text
          style={{
            fontFamily: 'SFProText-Regular',
            textAlign: 'center',
            paddingBottom: 30,
          }}>
          Let us know what is your name, email and your pasword!
        </Text>
        {/* Using formik for Input fields */}
        <Formik
          initialValues={{name: '', email: '', password: ''}}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, errors}) => (
            <>
              <TextInput
                placeholder="Name"
                icon="account-cowboy-hat"
                onChangeText={handleChange('name')}
                // keyboardType="email-address"
                style={styles.fields}
              />
              <Text style={{color: 'red'}}>{errors.name}</Text>

              <TextInput
                placeholder="email address"
                icon="email"
                onChangeText={handleChange('email')}
                // keyboardType="email-address"
                style={styles.fields}
              />
              <Text style={{color: 'red'}}>{errors.email}</Text>
              <TextInput
                placeholder="password"
                icon="lock"
                onChangeText={handleChange('password')}
                secureTextEntry
                style={styles.fields}
              />
              <Text style={{color: 'red'}}>{errors.password}</Text>

              <Button title="Register" onPress={handleSubmit}></Button>
            </>
          )}
        </Formik>
      </View>
      <View
        style={{
          borderWidth: 5,
          borderColor: '#0c0d34',
          backgroundColor: colors.bitblue,
          // width: 250,
          height: '20%',
          flexDirection: 'row',
          paddingBottom: 50,
          paddingTop: 30,
          justifyContent: 'center',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <Icon
          name="google"
          iconColor="#000"
          backgroundColor="#fff"
          style={{paddingLeft: 50}}></Icon>
        <Icon name="facebook" iconColor="#000" backgroundColor="#fff"></Icon>
        <Icon
          name="google"
          iconColor="#000"
          backgroundColor="#fff"
          style={{paddingLeft: 20, paddingRight: 20}}></Icon>

        <Text style={{color: 'white', alignSelf: 'flex-end'}}>
          Already Have an account?{' '}
          <Text accessibilityRole="link" style={{color: '#00ffff'}}>
            Login here!
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default RegisterView;

const styles = StyleSheet.create({
  FScr: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.white,
  },
  TextI: {
    width: '100%',
    // borderColor: 'black',
    borderWidth: 1,
  },
  fields: {
    borderWidth: 1,
    // borderColor: colors.lightGrey,
    width: '100%',
    borderRadius: 10,
    // marginBottom: -20,
  },
  V2C: {
    // borderWidth: 5,
    // borderColor: '#0c0d34',
    // width: 250,
    height: '62%',
    borderTopRightRadius: 75,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 75,
    borderBottomLeftRadius: 75,
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  V1C: {
    // borderWidth: 5,
    // borderColor: '#0c0d34',
    backgroundColor: 'blue',
    height: '18%',

    borderTopRightRadius: 50,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 95,
  },
});

{
  /* <TextInput
          placeholder="Hi I am Text!"
          keyboardType="numeric"
          style={styles.fields}
        />
        <TextInput
          placeholder="Hi I 2nd Text!"
          secureTextEntry
          style={styles.fields}
        /> */
}

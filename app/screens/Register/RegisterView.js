import React, {useState} from 'react';
import {Text, View, StyleSheet, Icon1} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../config/colors';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Screen from '../../components/Screen';
import Icon from '../../components/Icon';

// var [Hidden, setHidden] = useState(true);
// var Hidden = false;
const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),

  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

// showPassword = () => {
//   this.setHidden({Hidden: !this.Hidden});
// };
function RegisterView(props) {
  return (
    <View style={styles.FScr}>
      {/* First view */}
      <View style={styles.V1C}></View>
      {/* 2nd view for top right curve */}
      {/* <View
        style={{
          flex: 0.7,
          backgroundColor: 'black',
          alignSelf: 'flex-end',
          height: 30,
        }}></View> */}
      {/* 3rd view for content  */}
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
              <View
                style={{
                  // borderColor: colors.lightGrey,
                  // borderWidth: 1,

                  // borderRadius: 25,
                  flexDirection: 'row',
                }}>
                <TextInput
                  placeholder="password"
                  icon="lock"
                  onChangeText={handleChange('password')}
                  secureTextEntry
                  // ={this.Hidden}
                  style={styles.fields}
                />
                {/* <Icon
                  size="10"
                  name="eye"
                  // onPress={() => this.setHidden({Hidden: !this.Hidden})}
                  style={{color: 'black'}}></Icon> */}
              </View>
              <Text style={{color: 'red'}}>{errors.password}</Text>

              <Button title="Register" onPress={handleSubmit}></Button>
            </>
          )}
        </Formik>
      </View>

      {/* Form wala View ends here */}

      <View
        style={{
          // flex: 1,
          borderWidth: 5,
          borderColor: '#0c0d34',
          backgroundColor: colors.bitblue,
          // width: 250,
          height: '27%',
          // flexWrap: 'wrap',
        }}>
        <View
          style={{
            // alignSelf: 'flex-start',
            backgroundColor: 'white',
            borderBottomRightRadius: 80,
            borderBottomLeftRadius: 80,
            flex: 0.75,
            // width: '100%',
            // height: '20%',
            // paddingBottom: 30,
            marginLeft: -5,
            marginRight: -5,
            paddingRight: 10,
            marginTop: -10,
          }}></View>
        <View
          style={{
            flexDirection: 'column',
            // justifyContent: 'center',
            // justifyContent: 'space-evenly',
            // alignItems: 'center',
            paddingBottom: 50,
            paddingTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              // justifyContent: 'space-evenly',
              padding: 10,
              // alignSelf: 'stretch',
            }}>
            <View style={{paddingRight: 20}}>
              {/* <Icon
                name="google"
                iconColor="green"
                backgroundColor="#fff"
                // style={{marginRight: 50}}
              ></Icon> */}
              <MaterialCommunityIcons
                name="google"
                color="green"
                size={50}
                backgroundColor="#fff"
              />
            </View>
            <View>
              {/* <Icon
                name="facebook"
                iconColor="blue"
                backgroundColor="#fff"
                // style={{marginLeft: 50}}
              ></Icon> */}
              <MaterialCommunityIcons
                name="facebook"
                color="blue"
                size={50}
                backgroundColor="#fff"
              />
            </View>
          </View>
          <View>
            <Text
              style={{color: 'white', alignSelf: 'baseline', paddingLeft: 60}}>
              Already Have an account?{' '}
              <Text accessibilityRole="link" style={{color: 'red'}}>
                Login here!
              </Text>
            </Text>
          </View>
        </View>
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
    // borderBottomWidth: 1,
    // borderBottomColor: 'black',
    // borderColor: colors.black,
    width: '100%',
    // borderRadius: 10,
    // marginBottom: -20,
  },
  V2C: {
    // borderWidth: 5,
    // borderColor: '#0c0d34',
    // width: 250,
    height: '58%',
    borderTopRightRadius: 75,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 75,
    borderBottomLeftRadius: 75,
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  V1C: {
    // borderWidth: 5,
    // borderColor: '#0c0d34',
    backgroundColor: 'blue',
    height: '15%',

    borderTopRightRadius: 75,
    borderTopLeftRadius: 75,
    // borderBottomRightRadius: 25,
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

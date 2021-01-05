//

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';
import Stripe from 'react-native-stripe-api';
import {callPostReq} from '../../../api/WebServicesManager/WebServicesManager';
import axios from 'axios';
import styles from './styles';
import constants from '../../../assets/stylesheet/Constants';
import colors from '../../../config/colors';
import Button from '../../../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import localStorage from '../../../auth/storage';
import apiAuth from '../../../auth/useAuth';
import ActivityIndicator from './../../../components/ActivityIndicator';
import LottieView from 'lottie-react-native';
import ErrorMessage from './../../../components/form/ErrorMessage';
export default function StripePayment(props) {
  const {user} = apiAuth();
  const [response, setResponse] = useState();
  const [makePayment, setMakePayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [values, setValues] = useState({});
  const [showActivityIndicator, setActivityIndicator] = useState(false);
  const [showPopUp, setshowPopUp] = useState(false);
  const [varificationFailed, setvarificationFailed] = useState(false);
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const cartInfo = {
    id: '5eruyt35eggr76476236523t3',
    description: 'T Shirt - With react Native Logo',
    amount: 1,
  };
  const _onChange = (formData) => setValues(formData);
  const _onFocus = (field) => console.log('focusing', field);
  const payment = async () => {
    setActivityIndicator(true);
    var expiry = values.values.expiry;
    var month = expiry.split('/');
    console.log(month.length);
    const apiKey =
      'pk_test_51HyzS3CSXA43SZXtq9o4hb2HS4EJM0Ymb2SQnrlj32QGSpoTzTJy98L0zMyGAR0ET3t5yszbONfMp9YZdUPk16F300IGLhuZXc';
    const client = new Stripe(apiKey);
    await client
      .createToken({
        number: values.values.number,
        exp_month: month[0],
        exp_year: month[1],
        cvc: values.values.cvc,
        address_zip: values.values.postalCode,
      })
      .then((value) => {
        setActivityIndicator(false);
        console.log(value);
        const myObjStr = JSON.stringify(value);
        console.log(myObjStr);
        if (myObjStr.includes('error')) {
          setShow(true);
          setError(value.error);
        } else {
          setshowPopUp(true);
          localStorage.saveJSONOnlinePaymentDefaults(
            constants.KEY_USER_ORDER_ONLINE,
            value,
          );
          setTimeout(() => {
            props.navigation.goBack();
          }, 3000);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 20,
          height: '100%',
        }}
        showsVerticalScrollIndicator={false}>
        <ActivityIndicator visible={showActivityIndicator} />
        {showPopUp && (
          <View style={styles.overlay}>
            <LottieView
              autoPlay
              loop
              source={require('../../../assets/animations/3409-done.json')}
            />
          </View>
        )}
        <CreditCardInput
          autoFocus
          requiresName
          requiresCVC
          requiresPostalCode
          labelStyle={styles.label}
          inputStyle={styles.input}
          validColor={'black'}
          invalidColor={'red'}
          placeholderColor={'darkgray'}
          onFocus={_onFocus}
          onChange={_onChange}
        />
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Button
            width={'60%'}
            title="Payment"
            titlecolor={'white'}
            onPress={() => payment()}
          />
        </View>
        {show && (
          <View style={{alignItems: 'center'}}>
            <ErrorMessage error={error.code} visible={varificationFailed} />
            <ErrorMessage error={error.doc_url} visible={varificationFailed} />
            <ErrorMessage
              error={'Message :' + error.message}
              visible={varificationFailed}
            />
          </View>
        )}
      </KeyboardAwareScrollView>
    </>
  );
}

import React, {useState} from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import * as yup from 'yup';

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './styles';

import Button from '../../components/Button';

import colors from '../../config/colors';
import {Form, FormField, SubmitButton} from '../../components/form';
// import styles from './styles';
import {ic_facebook, ic_google} from '../helper/constants';

//net k animated Example walay constants
const {Value, Text: AnimatedText} = Animated;
const CELL_COUNT = 4;
const source = {
  uri: require('../../assets/images/ECLock.png'),
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};
const hardCoded = 1234;
const err = 'Enter Correct Code!';

const validationSchema = yup.object().shape({
  value: yup.string().required().label('Code'),
});

//   const AnimatedExample = () => {

//main FUnction hamara

function EnterCodeView(props) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [one, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const checkIF = () => {
    if (value === hardCoded) {
      console.log('Entered Value is Correct! Let him Go');
      console.log(value);
    } else if (value !== hardCoded) {
      return <Text>{err}</Text>;
    }
  };

  //net k animated Example wala code

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);
    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.upperbox}>
          <View style={styles.innerbox} />
        </View>
        <View style={styles.content}>
          <View style={styles.contentdata}>
            <View style={styles.titlecontainer}>
              <Text style={styles.titleheader}>
                Enter Code For Verification!
              </Text>
              <Text style={styles.subtitle}>
                A code has been sent to your email, please enter code to
                continue{' '}
              </Text>
            </View>
            <View style={styles.contentdata2}>
              <SafeAreaView style={styles.root}>
                <Image style={styles.icon} source={source.uri} />

                <CodeField
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={renderCell}
                />
              </SafeAreaView>
              <View
                style={{
                  width: '70%',
                  alignItems: 'center',
                  paddingTop: 170,
                  position: 'absolute',
                }}>
                <Button
                  title="Confirm"
                  titlecolor="white"
                  width="40%"
                  onPress={console.log('kuch b krdo!')}></Button>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.innerfooter}></View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
export default EnterCodeView;

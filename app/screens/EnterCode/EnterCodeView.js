import React, {useState} from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
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
import ErrorMessage from './../../components/form/ErrorMessage';
import colors from '../../config/colors';
import routes from '../../navigation/routes';

//net k animated Example walay constants

const {Value, Text: AnimatedText} = Animated;
const CELL_COUNT = 4;
import {ic_Elock} from './../helper/constants';

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

// const hardCoded = 1234;
// const err = 'Enter Correct Code!';

const validationSchema = yup.object().shape({
  value: yup.string().required().label('Code'),
});

//   const AnimatedExample = () => {

//main FUnction hamara

function EnterCodeView(props) {
  const [value, setValue] = useState();
  const [serverValue, setServerValue] = useState('1234');
  const [varificationFailed, setvarificationFailed] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [one, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const checkIF = () => {
    if (value !== serverValue) {
      setValue();
      return setvarificationFailed(true);
    } else {
      setvarificationFailed(false);
      props.navigation.navigate(routes.RESET);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.upperbox}>
            <View style={styles.innerbox}>
              <Text style={styles.titleheader}>Verification!</Text>
            </View>
          </View>
          <View style={styles.contentdata}>
            <Image style={styles.icon} source={ic_Elock} />
            <Text style={styles.subtitle}>
              A code has been sent to your email, please enter code to continue{' '}
            </Text>
            <ErrorMessage error="Invalid Code." visible={varificationFailed} />
            <View>
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
            </View>
            <Button
              title="Confrim"
              width="70%"
              titlecolor="white"
              onPress={checkIF}
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.innerfooter}></View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
export default EnterCodeView;

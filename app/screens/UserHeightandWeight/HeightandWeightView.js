import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import LabeledSwitch from './LabeledSwitch';
import styles from './styles';
import Slider from './Slider';
import colors from '../../config/colors';
import Button from '../../components/Button';
export default function HeightandWeightView() {
  const [heightMinValue, setHeightMinValue] = useState(0);
  const [heightMaxValue, setHeightMaxValue] = useState(7);
  const [heightValue, setHeightValue] = useState(0);
  const [heightUnit, setHeightUnit] = useState('ft');
  const [heightcolor, setHeightcolor] = useState('rgb(3, 169, 244)');
  const [weightMinValue, setWeightMinValue] = useState(0);
  const [weightMaxValue, setWeightMaxValue] = useState(150);
  const [weightValue, setWeightValue] = useState(0);
  const [weightcolor, setWeightcolor] = useState('rgb(5, 223, 215)');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [state, setState] = useState(false);
  const [color, setColor] = useState('light');
  const [Checkstate, setCheckState] = useState(false);

  const handleheight = () => {
    if (state === false) {
      setState(true);
      setHeightMinValue(0);
      setHeightValue(0);
      setHeightMaxValue(243);
      setHeightUnit('cm');
      setHeightcolor('rgb(5, 223, 215)');
    } else {
      setState(false);
      setHeightMinValue(0);
      setHeightValue(0);
      setHeightMaxValue(7);
      setHeightUnit('ft');
      setHeightcolor('rgb(3, 169, 244)');
    }
  };
  const handleweight = () => {
    if (state === false) {
      setState(true);
      setWeightMinValue(0);
      setWeightValue(0);
      setWeightMaxValue(340);
      setWeightUnit('pounds');
      setWeightcolor('rgb(5, 223, 215)');
    } else {
      setState(false);
      setWeightMinValue(0);
      setWeightValue(0);
      setWeightMaxValue(150);
      setWeightUnit('kg');
      setWeightcolor('rgb(3, 169, 244)');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperheader}>
        <Text style={styles.headertext}>
          {' '}
          STEP 1
          <View>
            <Text style={styles.headerinnertext}>{'   '} ______ </Text>
          </View>
          <Text style={styles.headerinnertext2}> {'  '} STEP 2</Text>
        </Text>
        <Text style={styles.headerDone}>All most Done !</Text>
      </View>
      <View style={styles.upperTitleheader}>
        <Text style={styles.genderText}>HOW TALL ARE YOU?</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <LabeledSwitch
            value={state}
            onChange={handleheight}
            disabledColor="#03A9F4"
            enabledColor="#05dfd7"
            disabledLabel="ft"
            enabledLabel="Cm"
            width={80}
          />
        </View>
        <View style={{padding: 20}}>
          <Slider
            min={heightMinValue}
            height={50}
            max={heightMaxValue}
            value={heightValue}
            decimalPlaces={1}
            fontSize={16}
            backgroundColor={[heightcolor]}
            onValueChanged={(value) => console.log(value)}
            onPressIn={() => console.log('Pressed in')}
            onPressOut={() => console.log('Pressed out')}
            onDrag={() => console.log('Dragging')}
          />
        </View>
      </View>
      <View style={{alignSelf: 'center'}}>
        <View style={styles.upperTitleheader}>
          <Text style={styles.genderText}>WHAT IS YOUR WEIGHT?</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <LabeledSwitch
            value={state}
            onChange={handleweight}
            disabledColor="#05dfd7"
            enabledColor="#03A9F4"
            disabledLabel="Kg"
            enabledLabel="Pound"
            width={100}
          />
        </View>
        <View style={{padding: 20}}>
          <Slider
            min={weightMinValue}
            height={50}
            max={weightMaxValue}
            value={weightValue}
            decimalPlaces={1}
            fontSize={16}
            backgroundColor={[weightcolor]}
            onValueChanged={(value) => console.log(value)}
            onPressIn={() => console.log('Pressed in')}
            onPressOut={() => console.log('Pressed out')}
            onDrag={() => console.log('Dragging')}
          />
        </View>
      </View>
      <View style={styles.checkContainer}>
        <CheckBox
          value={Checkstate}
          tintColors={{true: colors.primary}}
          onValueChange={(value) => {
            setCheckState(value);
            !Checkstate ? setColor('primary') : setColor('light');
          }}
        />
        <Text
          style={[
            styles.checkText,
            {color: Checkstate ? colors.primary : colors.medium},
          ]}>
          I accept
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('Detailed Info');
            }}>
            <Text
              style={[
                styles.checkText,
                {color: Checkstate ? colors.primary : colors.medium},
              ]}>
              {' '}
              Terms and Conditions
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          title="Next"
          buttoncolor={color}
          titlecolor="white"
          width="60%"
          onPress={() => {
            !Checkstate
              ? console.log('Try Again')
              : console.log('Try Again Primary');
          }}
        />
      </View>
    </View>
  );
}

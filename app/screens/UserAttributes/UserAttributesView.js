import React, {useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';
import colors from '../../config/colors';
import Button from '../../components/Button';
import {
  ic_manBlack,
  ic_manBlonde,
  ic_manBrown,
  ic_manGrey,
  ic_manRed,
  ic_manWhite,
  ic_womenBlack,
  ic_womenBlonde,
  ic_womenBrown,
  ic_womenGrey,
  ic_womenRed,
  ic_womenWhite,
} from '../helper/constants';
import routes from '../../navigation/routes';

function UserAttributesView(props) {
  const [right, setRight] = useState(0);
  const [gender, setGender] = useState('FEMALE');
  const [age, setAge] = useState(26);
  const [hairColor, sethairColor] = useState('black');
  const [skinColor, setskinColor] = useState('#ecbcb4');
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
      </View>
      <View style={styles.upperGenderheader}>
        <Text style={styles.genderText}>GENDER</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxinnertext}>{gender}</Text>
        <Image
          resizeMode="contain"
          source={ic_womenBlack}
          style={[styles.logoimage, {right: right}]}
        />
      </View>
      <View style={styles.boxcontainer}>
        <Text style={styles.AgeText}>ESTIMATED AGE</Text>
        <Text style={styles.AgeText2}>{age}</Text>
      </View>
      <View style={styles.boxcontainer}>
        <Text style={styles.colorText}>HAIR COLOR</Text>
        <View style={[styles.colorbox, {backgroundColor: hairColor}]} />
      </View>
      <View style={styles.boxcontainer}>
        <Text style={styles.colorText}>SKIN COLOR</Text>
        <View style={[styles.colorbox, {backgroundColor: skinColor}]} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('Detailed Info');
          }}>
          <Text style={{color: colors.primary}}>Detailed Info</Text>
        </TouchableWithoutFeedback>
        <Button
          title="Try Again"
          buttoncolor="medium"
          width="60%"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Button
          title="Next"
          titlecolor="white"
          width="60%"
          onPress={() => {
            props.navigation.navigate(routes.USERHEIGHTANDWEIGHT);
          }}
        />
      </View>
    </View>
  );
}
export default UserAttributesView;

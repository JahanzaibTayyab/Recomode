import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';
import Button from '../../components/Button';
import {
  ic_womenBlonde,
  ic_men
} from '../helper/constants';
import routes from '../../navigation/routes';

function UserAttributesView(props) {
  const data = props.route.params;
  const [Imageuser, setImageUser] = useState(ic_men);
  const [gender, setGender] = useState(data[0].faceAttributes.gender);
  const [age, setAge] = useState(data[0].faceAttributes.age);
  const [hairColor, sethairColor] = useState(data[0].faceAttributes.hair.hairColor[0].color);
  const [skinColor, setskinColor] = useState('#ecbcb4');

  useEffect(() => {
    if (gender === 'male') {
      setGender("MALE")
      setImageUser(ic_men)
    }
    else if (gender === 'female') {
      setGender("FEMALE")
      setImageUser(ic_womenBlonde)
    }
  }, []);
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
          source={Imageuser}
          style={[styles.logoimage,]}
        />
      </View>
      <View style={styles.boxcontainer}>
        <Text style={styles.AgeText}>ESTIMATED AGE</Text>
        <Text style={styles.AgeText2}>{age}</Text>
      </View>
      <View style={styles.boxcontainer}>
        <Text style={styles.colorText}>HAIR COLOR</Text>
        <View style={[styles.colorbox, { backgroundColor: hairColor }]} />
      </View>
      <View style={styles.boxcontainer}>
        <Text style={styles.colorText}>SKIN COLOR</Text>
        <View style={[styles.colorbox, { backgroundColor: skinColor }]} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('Detailed Info');
          }}>
          <Text style={{ color: colors.primary }}>Detailed Info</Text>
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

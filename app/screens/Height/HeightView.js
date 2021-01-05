import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

import colors from '../../config/colors';
import Button from '../../components/Button';
import styles from './styles';
import { FONT_SEMIBOLD } from './../../config/Constant';
import routes from '../../navigation/routes';
import HomeActivityIndicator from "../../components/HomeActivityIndicator"
import ShirtColors from './../../api/ShirtColors';
import useAuth from "../../auth/useAuth";
import localStorage from "../../auth/storage"
import constants from "../../assets/stylesheet/Constants"


function HeightView(props) {
  const [loose, setLooseFit] = useState("M");
  const [regular, setRegular] = useState("S");
  const [smart, setSmartFit] = useState("XS");
  const [plusSize, setPlusSize] = useState('');
  const size = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const [showActivityIndicator, setActivityIndicator] = useState(false);
  const height = props.route.params.heightValue;
  const weight = props.route.params.weightValue;
  const userData = props.route.params.userdata
  const apiAuth = useAuth();
  const [isGuest, setIsGuest] = useState(false)

  const checkIfUserGuesstOrNot = () => {
    localStorage.getKeyFromUserDefaults(constants.KEY_USER_GUEST).then((value) => {
      console.log(value)
      if (value) {
        setIsGuest(true)
      }
    });
  }
  useEffect(() => {
    checkIfUserGuesstOrNot()
    selection(6.0, 180)
  }, []); //Pass Array as second argument

  //5.1
  const height_5_1 = (weight) => {
    if (weight <= 130) {
      setRegular('XS');
      setSizes(regular)
    }
    else if (weight >= 131 && weight <= 140) {
      setRegular('S');
      setSizes(regular)
    }
  }
  //5.2 5.3 5.4
  const height_5_2_3_4 = (weight) => {
    if (weight <= 130) {
      setRegular('XS')
      setSizes(regular)
    }
    else if (weight >= 131 && weight <= 140) {
      setRegular('S')
      setSizes(regular)
    }
    else if (weight >= 141 && weight <= 150) {
      setRegular('S')
      setSizes(regular)
    }
  }
  //5.5
  const height_5_5 = (weight) => {
    if (weight <= 130) {
      setRegular('S');
      setSizes(regular)
    }
    else if (weight >= 131 && weight <= 150) {
      setRegular('S')
      setSizes(regular)
    }
    else if (weight >= 151 && weight <= 176) {
      setRegular('M')
      setSizes(regular)
    }
    else if (weight >= 177 && weight <= 187) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 188 && weight <= 204) {
      setRegular('L')
      setSizes(regular)
    }
  }
  //5.6
  const height_5_6 = (weight) => {
    if (weight <= 130) {
      setRegular('S');
      setSizes(regular)
    }
    else if (weight >= 131 && weight <= 150) {
      setRegular('S')
      setSizes(regular)
    }
    else if (weight >= 151 && weight <= 176) {
      setRegular('M')
      setSizes(regular)
    }
    else if (weight >= 177 && weight <= 182) {
      setRegular('M')
      setSizes(regular)
    }
    else if (weight >= 183 && weight <= 187) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 188 && weight <= 204) {
      setRegular('L')
      setSizes(regular)
    }
  }
  //5.7
  const height_5_7 = (weight) => {
    if (weight <= 130) {
      setRegular('S');
      setSizes(regular)
    }
    else if (weight >= 131 && weight <= 150) {
      setRegular('S')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 151 && weight <= 182) {
      setRegular('M')
      setSizes(regular)
    }
    else if (weight >= 183 && weight <= 194) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 195 && weight <= 204) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 205 && weight <= 214) {
      setRegular('XL')
      setSizes(regular)
    }
  }
  //5.8
  const height_5_8 = (weight) => {
    if (weight <= 130) {
      setRegular('S');
      setSizes(regular)
    }
    else if (weight >= 131 && weight <= 160) {
      setRegular('S')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 161 && weight <= 182) {
      setRegular('M')
      setSizes(regular)
    }
    else if (weight >= 183 && weight <= 187) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 188 && weight <= 194) {
      setRegular('M')
      setPlusSize('L')
      setSizes(regular)
    }
    else if (weight >= 195 && weight <= 204) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 205 && weight <= 214) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 215 && weight <= 229) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const height_5_9 = (weight) => {
    if (weight <= 130) {
      setRegular("S")
      setSizes(regular)
    }
    else if (weight >= 131 && weight <= 150) {
      setRegular('S')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 151 && weight <= 160) {
      setRegular('S')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 161 && weight <= 187) {
      setRegular('M')
      setSizes(regular)
    }
    else if (weight >= 188 && weight <= 194) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 195 && weight <= 204) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 205 && weight <= 214) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 215 && weight <= 229) {
      setRegular('XXL')
      setSizes(regular)
    }
    else if (weight >= 230) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const height_5_10 = (weight) => {
    if (weight <= 130) {
      setRegular("S")
      setSizes(regular)
    }
    else if (weight >= 131 && weight <= 160) {
      setRegular('S')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 161 && weight <= 187) {
      setRegular('M')
      setSizes(regular)
    }
    else if (weight >= 188 && weight <= 194) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 195 && weight <= 204) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 205 && weight <= 214) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 215 && weight <= 229) {
      setRegular('XXL')
      setSizes(regular)
    }
    else if (weight >= 230) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const height_5_11 = (weight) => {
    if (weight >= 131 && weight <= 160) {
      setRegular('S')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 161 && weight <= 176) {
      setRegular('M')
      setSizes(regular)
    }
    else if (weight >= 177 && weight <= 194) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 195 && weight <= 204) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 205 && weight <= 229) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 230) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const height_6 = (weight) => {
    if (weight >= 131 && weight <= 160) {
      setRegular('S')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 161 && weight <= 170) {
      setRegular('S')
      setSizes(regular)
    }
    else if (weight >= 171 && weight <= 176) {
      setRegular('M')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 177 && weight <= 194) {
      setRegular('M')
      setPlusSize("Large")
      setSizes(regular)
    }
    else if (weight >= 195 && weight <= 214) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 215 && weight <= 229) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 230) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const height_6_1 = (weight) => {
    if (weight >= 141 && weight <= 160) {
      setRegular('S')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 161 && weight <= 170) {
      setRegular('S')
      setSizes(regular)
    }
    else if (weight >= 171 && weight <= 176) {
      setRegular('M')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 177 && weight <= 194) {
      setRegular('M')
      setPlusSize("Large")
      setSizes(regular)
    }
    else if (weight >= 195 && weight <= 214) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 215 && weight <= 229) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 230) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const height_6_2 = (weight) => {
    if (weight >= 141 && weight <= 170) {
      setRegular('S')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 171 && weight <= 176) {
      setRegular('M')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 177 && weight <= 187) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 188 && weight <= 214) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 215 && weight <= 229) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 230) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const height_6_3 = (weight) => {
    if (weight >= 141 && weight <= 176) {
      setRegular('M')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 177 && weight <= 187) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 188 && weight <= 214) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 215 && weight <= 229) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 230) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const height_6_4 = (weight) => {
    if (weight >= 151 && weight <= 182) {
      setRegular('M')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 183 && weight <= 187) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 188 && weight <= 204) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 205 && weight <= 214) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 215 && weight <= 229) {
      setRegular('XXL')
      setSizes(regular)
    }
    else if (weight >= 230) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const height_6_5 = (weight) => {
    if (weight >= 151 && weight <= 182) {
      setRegular('M')
      setPlusSize('Long')
      setSizes(regular)
    }
    else if (weight >= 183 && weight <= 187) {
      setRegular('M')
      setPlusSize('Large')
      setSizes(regular)
    }
    else if (weight >= 188 && weight <= 204) {
      setRegular('L')
      setSizes(regular)
    }
    else if (weight >= 205 && weight <= 214) {
      setRegular('XL')
      setSizes(regular)
    }
    else if (weight >= 215 && weight <= 229) {
      setRegular('XXL')
      setSizes(regular)
    }
    else if (weight >= 230) {
      setRegular('XXL')
      setSizes(regular)
    }
  }
  const setSizes = (reg_size) => {
    for (var i = 0; i < size.length; i++) {
      if (reg_size === size[i]) {
        if (reg_size === size[0]) {
          console.log("Case 1 ")
          setLooseFit(size[i + 1])
          setSmartFit('')
        }
        else if (i == size.length) {
          console.log("Case 2")
          setSmartFit(size[i - 1])
          setLooseFit(reg_size)
        }
        else {
          console.log("Case 3")
          setSmartFit(size[i - 1])
          setLooseFit(size[i + 1])
        }
        break;
      }
    }
  }

  const saveGuest = async (imgurl) => {
    console.log("Guest User")
    userData.imageUrl = imgurl
    userData.shirtColors = ShirtColors(userData.skinColor)
    apiAuth.logIn(constants.KEY_USERINFO, userData)
    setActivityIndicator(false)
  }
  const addUser = async (imgurl) => {
    userData.imageUrl = imgurl
    firestore().collection('users').doc(userData.id).update(userData).then(() => {
      userData.shirtColors = ShirtColors(userData.skinColor)
      console.log(userData)
      apiAuth.logIn(constants.KEY_USERINFO, userData)
      setActivityIndicator(false)
    }
    )
  }
  const uploadImage = async () => {
    setActivityIndicator(true)
    const { imageUrl } = userData;
    const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? imageUrl.replace('file://', '') : imageUrl;
    const task = storage()
      .ref(filename)
      .putFile(uploadUri)
    task.on('state_changed', snapshot => {
    });
    task.then(async () => {
      const ref = storage().ref(filename);
      const url = await ref.getDownloadURL();
      { isGuest ? saveGuest(url) : addUser(url) }
      console.log(url)
    })
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
  }
  const selection = (height, weight) => {

    console.log("Switch weight value" + weight)
    console.log("Switch Height Value " + height)

    switch (height) {
      case 5.1:
        height_5_1(weight)
        break;
      case 5.2:
        height_5_2_3_4(weight)
        break;
      case 5.3:
        height_5_2_3_4(weight)
        break;
      case 5.4:
        height_5_2_3_4(weight)
        break;
      case 5.5:
        height_5_5(weight)
        break;
      case 5.6:
        height_5_6(weight)
        break;
      case 5.7:
        height_5_7(weight)
        break;
      case 5.8:
        height_5_8(weight)
        break;
      case 5.9:
        height_5_9(weight)
        break;
      case 5.10:
        height_5_10(weight)
        break;
      case 5.11:
        height_5_11(weight)
        break;
      case 6.0:
        height_6(weight)
        break;
      case 6.1:
        height_6_1(weight)
        break;
      case 6.2:
        height_6_2(weight)
        break;
      case 6.3:
        height_6_3(weight)
        break;
      case 6.4:
        height_6_4(weight)
        break;
      case 6.5:
        height_6_5(weight)
        break;
      default:
        console.log("Invalid Size!")
        break;
    }
  }
  return (
    <>
      <View style={styles.conatiner}>
        <HomeActivityIndicator visible={showActivityIndicator} />
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <View style={styles.header}>
          <Text style={styles.headertext}>COMPLETE</Text>
        </View>
        <View style={styles.sizecontainer}>
          <View style={styles.sizeheader}>
            <Text style={styles.sizeheadertitle}>YOUR RECOMMENDED SIZE</Text>
          </View>
          <View style={styles.boxcontainer}>
            <View
              style={[styles.box, { backgroundColor: "#38c4e8" }]}>
              <Text style={styles.boxinnertext}>{smart}</Text>
              <View>
                <Text style={styles.boxoutertext}>Smart fit</Text>
              </View>
            </View>
            <View
              style={[
                styles.box,
                {
                  width: 80,
                  height: 80,
                  top: -30,
                  backgroundColor: "#21bf19",
                },
              ]}>
              <Text style={styles.boxinnertext}>{regular}</Text>
              {plusSize === '' ? null : <Text style={{ color: "white", fontFamily: 'SFProText-Semibold', alignSelf: 'center', alignContent: 'center', top: 8, fontSize: 16 }}>{plusSize}</Text>}
              <View>
                <Text style={[styles.boxoutertext, { top: 30 }]}>Regular fit</Text>
              </View>
            </View>
            <View
              style={[styles.box, { backgroundColor: "#f59169" }]}>
              <Text style={styles.boxinnertext}>{loose}</Text>
              <View>
                <Text style={styles.boxoutertext}>Losse fit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.footertext}>
            Your
          <Text style={{ fontFamily: FONT_SEMIBOLD }}>
              {' '}
            Recomode Profile{' '}
            </Text>
          is completed.
        </Text>
          <Text style={styles.footertext}>
            Outfit recommendations are now available
        </Text>
          <View style={styles.footerbutton}>
            <Button title="Go HOME" titlecolor="white" width="70%"
              onPress={() => uploadImage()}
            />
          </View>
        </View>
      </View>
    </>
  );
}
export default HeightView;

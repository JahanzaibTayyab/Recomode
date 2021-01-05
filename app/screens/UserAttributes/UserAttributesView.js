import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Modal from 'react-native-modal';

import styles from './styles';
import colors from '../../config/colors';
import Button from '../../components/Button';
import {
  ic_womenBlonde,
  ic_men
} from '../helper/constants';
import routes from '../../navigation/routes';
import { SCREEN_HEIGHT, SCREEN_WIDTH, FONT_Regular, FONT_MEDIUM, FONT_SEMIBOLD } from "../../config/Constant"


function UserAttributesView(props) {
  /// console.log(props.route.params)
  // const data = props.route.params.userImageData;
  const userData = props.route.params.user
  console.log(userData)
  const [dataSource, setDataSource] = useState(props.route.params.data)
  const [Imageuser, setImageUser] = useState(ic_men);
  const [gender, setGender] = useState(dataSource[0].faceAttributes.gender);
  const [age, setAge] = useState(dataSource[0].faceAttributes.age);
  const [hairColor, sethairColor] = useState(dataSource[0].faceAttributes.hair.hairColor[0].color);
  // const [gender, setGender] = useState('male');
  // const [age, setAge] = useState(26);
  // const [hairColor, sethairColor] = useState('black');
  const [skinColor, setskinColor] = useState('#f3c6a5');
  const [isDetailedView, setIsDetailedView] = useState(false)
  const toggleDetailView = () => {
    setIsDetailedView(false)
  }

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
  const renderHairView = (item) => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          // key={item.}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item}
          // style={{ felx: 1, backgroundColor: colors.white, height: 65, marginTop: 10, left: -15 }}
          renderItem={({ item }) =>
            <View style={[{
              borderRadius: 20,
              // backgroundColor: constants.COLOR_WHITE,
              borderColor: colors.bitblue,
              borderWidth: 0,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: colors.black,
              shadowOpacity: 0.1,
              elevation: 2,
              shadowRadius: 10,
              shadowOffset: { width: 1, height: 50 },
              height: 82,
              width: 88,
              marginLeft: 15,
              alignSelf: "center",
              marginBottom: 5,
              marginTop: 10,
            }, item.color === 'blond' ? { backgroundColor: "#FAF0BE" } : { backgroundColor: item.color }]}>
              <Text style={[{ fontFamily: FONT_Regular, fontSize: 12, color: colors.white }, item.color === 'white' || item.color === "other" || item.color === "blond" ? { color: colors.black } : { color: colors.white }]}>{item.color}</Text>
              <Text style={[{ fontFamily: FONT_Regular, fontSize: 12, color: colors.white }, item.color === 'white' || item.color === "other" || item.color === "blond" ? { color: colors.black } : { color: colors.white }]}>Confidence</Text>
              <Text style={[{ fontFamily: FONT_SEMIBOLD, fontSize: 12, }, item.color === 'white' || item.color === "other" || item.color === "blond" ? { color: colors.black } : { color: colors.white }]}>{item.confidence}</Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
  const renderAccessoriesView = (item) => {
    console.log("Yaha Aya")
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={item}
          renderItem={({ item }) =>
            <>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", marginHorizontal: 30, justifyContent: "space-between" }}>
                  <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12 }}>{item.type}</Text>
                  <Text style={{ fontFamily: FONT_Regular, fontSize: 12, marginBottom: 10 }}>{item.confidence}</Text>
                </View>
                <View style={{ borderBottomColor: "#00A9FF", borderBottomWidth: 1, marginBottom: 10, marginHorizontal: 40, }}></View>
              </View>

            </>

          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

    );
  }
  const dataView = () => {
    return dataSource.map((item) => {
      return (
        <View style={{ marginTop: 10, flex: 1 }}>
          <View style={{ borderRadius: 5, borderColor: "#00A9FF", borderWidth: 0.2, marginTop: 5, flex: 1 }}>
            <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 14, marginHorizontal: 20, marginBottom: 5, marginTop: 10, }}>Hair</Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 30, marginBottom: 5, }}>
              <Text style={{ fontFamily: FONT_MEDIUM, fontSize: 12 }} >Bald</Text>
              <Text style={{ fontFamily: FONT_Regular, fontSize: 12 }} >{item.faceAttributes.hair.bald}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 30, }}>
              <Text style={{ fontFamily: FONT_MEDIUM, fontSize: 12 }} >Invisible</Text>
              {item.faceAttributes.hair.invisible ? <Text style={{ fontFamily: FONT_Regular, fontSize: 12, color: colors.primary }} >true</Text> : <Text style={{ fontFamily: FONT_Regular, fontSize: 12, color: colors.danger }} >false</Text>}
            </View>
            {renderHairView(item.faceAttributes.hair.hairColor)}
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 20, marginBottom: 5, marginTop: 10 }}>
              <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12, }} >Smile</Text>
              <Text style={{ fontFamily: FONT_Regular, fontSize: 12 }} >{item.faceAttributes.smile}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 20, marginBottom: 5, marginTop: 10 }}>
              <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12, }} >Gender</Text>
              <Text style={{ fontFamily: FONT_Regular, fontSize: 12 }} >{item.faceAttributes.gender}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 20, marginBottom: 5, marginTop: 10 }}>
              <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12, }} >Age</Text>
              <Text style={{ fontFamily: FONT_Regular, fontSize: 12 }} >{item.faceAttributes.age}</Text>
            </View>
            <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12, marginHorizontal: 20, marginBottom: 5, marginTop: 10 }} >Facial Hair</Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 30, marginBottom: 5, }}>
              <Text style={{ fontFamily: FONT_MEDIUM, fontSize: 12 }} >Moustache</Text>
              <Text style={{ fontFamily: FONT_Regular, fontSize: 12 }} >{item.faceAttributes.facialHair.moustache}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 30, marginBottom: 5, }}>
              <Text style={{ fontFamily: FONT_MEDIUM, fontSize: 12 }} >Beard</Text>
              <Text style={{ fontFamily: FONT_Regular, fontSize: 12 }} >{item.faceAttributes.facialHair.beard}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 30, marginBottom: 5, }}>
              <Text style={{ fontFamily: FONT_MEDIUM, fontSize: 12 }} >Sideburns</Text>
              <Text style={{ fontFamily: FONT_Regular, fontSize: 12 }} >{item.faceAttributes.facialHair.sideburns}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 20, marginBottom: 5, marginTop: 10 }}>
              <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12, }} >Glasses</Text>
              <Text style={{ fontFamily: FONT_Regular, fontSize: 12 }} >{item.faceAttributes.glasses}</Text>
            </View>
            <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12, marginHorizontal: 20, marginBottom: 5, marginTop: 10 }} >Accessories</Text>
            <View style={{ flex: 1, width: "100%" }}>
              {renderAccessoriesView(item.faceAttributes.accessories)}
            </View>

          </View>
        </View>
      )
    })

  }
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
            setIsDetailedView(true)
          }}>
          <Text style={{ color: colors.primary, fontFamily: FONT_MEDIUM }}>Detailed Info</Text>
        </TouchableWithoutFeedback>
        <Button
          title="Try Again"
          buttoncolor="bluelight"
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
            userData.faceAttributes = dataSource[0].faceAttributes
            userData.skinColor = skinColor
            props.navigation.navigate(routes.USERHEIGHTANDWEIGHT, { userData });
          }}
        />
      </View>
      {isDetailedView ?
        <Modal coverScreen={true}
          isVisible={isDetailedView}
          hasBackdrop={true}
          style={styles.detailContainer}
          backdropColor={"#eae9ee"}
          backdropOpacity={0.9}
          onBackdropPress={() => toggleDetailView()}
        >
          <View style={{
            position: "absolute",
            width: "100%",
            height: "100%"
          }}></View>
          <BlurView style={styles.blurViewStyles}
            reducedTransparencyFallbackColor="black"
            blurType="light"
            blurAmount={10}
          />
          {/* <TouchableOpacity activeOpacity={1}
              style={[styles.container, {
                position: "absolute",
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT
              }]} onPress={toggleDetailView()}>

            </TouchableOpacity>
          </BlurView> */}

          <View style={styles.blurInnerView}>
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 22, marginTop: 20, marginLeft: 10, alignSelf: "center" }}>Detail Analysis</Text>
              {dataView()}
              <Text></Text>
            </ScrollView>
          </View>

        </Modal>
        : null}
    </View>
  );
}
export default UserAttributesView;

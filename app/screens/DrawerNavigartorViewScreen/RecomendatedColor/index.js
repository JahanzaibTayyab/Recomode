import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Nav from '../../../components/Nav';
import styles from './styles';
import useAuth from '../../../auth/useAuth';
export default function index(props) {
  const {user} = useAuth();
  const configureColors = (item, id) => {
    return item.map((data) => {
      return (
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 17.5,
            marginHorizontal: 20,
            marginTop: 20,
            backgroundColor: data,
          }}
        />
      );
    });
  };
  return (
    <View style={styles.conatiner}>
      <Nav navigation={props.navigation} />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={styles.groupTitle}>Skin Color</Text>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: user.skinColor,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <Text style={styles.groupTitle}>Hair Color</Text>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: user.faceAttributes.hair.hairColor[0].color,
            }}></View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <Text style={styles.groupTitle}>Recommend Color </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 12,
            }}>
            {configureColors(user.shirtColors)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

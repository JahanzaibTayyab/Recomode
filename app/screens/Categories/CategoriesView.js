import React from 'react';
import {ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import Nav from '../../components/Nav';
import firestore from '@react-native-firebase/firestore';
import Loader from './../../components/Loader';
export default function CategoriesView(props) {
  const [totalShirts, setTotalShirts] = React.useState(0);
  const [totalPants, setTotalPants] = React.useState(0);
  const [totalShoes, setTotalShoes] = React.useState(0);
  const [totalShirtsData, setTotalShirtsData] = React.useState([]);
  const [totalPantsData, setTotalPantsData] = React.useState([]);
  const [totalShoesData, setTotalShoesData] = React.useState([]);
  const [showLoader, setShowLoader] = React.useState(true);
  React.useEffect(() => {
    firestore()
      .collection('shirts')
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((documentSnapshot) => {
          data.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setTotalShirtsData(data);
        setTotalShirts(querySnapshot.size);
      });
    firestore()
      .collection('pants')
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((documentSnapshot) => {
          data.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setTotalPantsData(data);
        setTotalPants(querySnapshot.size);
      });
    firestore()
      .collection('shoes')
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((documentSnapshot) => {
          data.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setTotalShoesData(data);
        setTotalShoes(querySnapshot.size);
        setShowLoader(false);
      });
  }, []);
  return (
    <View style={styles.boxcontainer}>
      <Loader visible={showLoader} />
      <Nav {...props} />
      <ScrollView>
        <TouchableOpacity
          style={{
            overflow: 'hidden',
            height: 130,
            width: '100%',
            marginTop: 5,
            borderRadius: 5,
          }}
          onPress={() => {
            props.navigation.navigate('CategorierSelect', {
              data: totalShirtsData,
              from: 'Shirts',
            });
          }}>
          <ImageBackground
            source={require('../../assets/images/ShirtImage.jpg')}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
          <View style={styles.layout}></View>
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              top: 40,
            }}>
            <Text style={styles.textHeader}>SHIRTS</Text>
            <Text style={styles.subText}>{totalShirts} Products</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            overflow: 'hidden',
            height: 130,
            width: '100%',
            marginTop: 5,
            borderRadius: 5,
          }}
          onPress={() => {
            props.navigation.navigate('CategorierSelect', {
              data: totalPantsData,
              from: 'Pants',
            });
          }}>
          <ImageBackground
            source={require('../../assets/images/PantImage.jpg')}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
          <View style={styles.layout}></View>
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              top: 40,
            }}>
            <Text style={styles.textHeader}>PANTS</Text>
            <Text style={styles.subText}>{totalPants} Products</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            overflow: 'hidden',
            height: 130,
            width: '100%',
            marginTop: 5,
            borderRadius: 5,
          }}
          onPress={() => {
            props.navigation.navigate('CategorierSelect', {
              data: totalShoesData,
              from: 'Shoes',
            });
          }}>
          <ImageBackground
            source={require('../../assets/images/ShoesImage.jpg')}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
          <View style={styles.layout}></View>
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              top: 40,
            }}>
            <Text style={styles.textHeader}>SHOES</Text>
            <Text style={styles.subText}>{totalShoes} Products</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

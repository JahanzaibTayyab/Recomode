import React from 'react';
import {View, Text, Dimensions} from 'react-native';
// import {Avatar} from 'react-native-paper';

import styles from './styles';
import colors from '../../config/colors';
import Icon from '../../components/Icon';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import routes from '../../navigation/routes';

const {width, height} = Dimensions.get('window');

const data = [
  {
    name: 'Jahanzaib Tayyab',
    email: 'jtayyab204@gmail.com',
  },
];

function DrawerView(props) {
  return (
    <View style={styles.conatiner}>
      <View style={styles.upperbox}>
        <View style={styles.innerbox}>
          <Text style={styles.upperText}>MY PROFILE</Text>
        </View>
      </View>
      <View style={{flex: 0.8}}>
        <View style={{flex: 1, backgroundColor: colors.bitblue}}></View>
        <View style={{flex: 1, backgroundColor: colors.bitblue}}></View>
        <View style={styles.content}>
          {/* <Avatar.Image
            style={{alignSelf: 'center', top: -53}}
            source={require('../../assets/images/userprofile.jpg')}
            size={90}
          /> */}
          <View style={{alignSelf: 'center', top: -30}}>
            <Text style={styles.userName}>Jahanzaib Tayyab</Text>
            <Text style={styles.userEmail}>jtayyab204@gmail.com</Text>
          </View>
          <DrawerContentScrollView>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" backgroundColor="#2CB9B0" size={30} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate(routes.HOME);
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="heart-outline" backgroundColor="orange" size={30} />
              )}
              label="Favourite Outfits"
              onPress={() => {
                props.navigation.navigate(routes.FAVOUROTE);
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="account-edit-outline"
                  backgroundColor="blue"
                  size={30}
                />
              )}
              label="Edit Profile"
              onPress={() => {
                props.navigation.navigate('Height');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cog-outline" backgroundColor="#00008B" size={30} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Welcome');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="information-outline"
                  backgroundColor="#000080"
                  size={30}
                />
              )}
              label="Demo"
              onPress={() => {
                props.navigation.navigate('Welcome');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="information-outline"
                  backgroundColor="#000080"
                  size={size}
                />
              )}
              label="Demo"
              onPress={() => {
                props.navigation.navigate('Welcome');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="logout" backgroundColor="black" size={size} />
              )}
              label="Logout"
              onPress={() => {
                props.navigation.navigate('Welcome');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="logout" backgroundColor="black" size={size} />
              )}
              label="Logout"
              onPress={() => {
                props.navigation.navigate('Welcome');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="logout" backgroundColor="black" size={size} />
              )}
              label="Logout"
              onPress={() => {
                props.navigation.navigate('Welcome');
              }}
            />
          </DrawerContentScrollView>
        </View>
      </View>
      <View style={styles.innerFooterbox}>
        <View style={styles.foteerbox} />
      </View>
    </View>
  );
}
export default DrawerView;

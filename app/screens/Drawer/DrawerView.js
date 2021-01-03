import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {Avatar} from 'react-native-paper';

import styles from './styles';
import colors from '../../config/colors';
import Icon from '../../components/Icon';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import routes from '../../navigation/routes';
import {
  FONT_LIGHT,
  FONT_MEDIUM,
  FONT_Regular,
  FONT_SEMIBOLD,
} from '../../config/Constant';
import useAuth from '../../auth/useAuth';

const {width, height} = Dimensions.get('window');

function DrawerView(props) {
  const {user, logOut} = useAuth();
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
          <Avatar.Image
            style={{alignSelf: 'center', top: -53}}
            source={{uri: user.imageUrl}}
            size={90}
          />
          <View style={{alignSelf: 'center', top: -30}}>
            <Text style={styles.userName}>{user.fullName}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
          <DrawerContentScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: -20}}>
            <DrawerItem
              style={{}}
              icon={({color, size}) => (
                <Icon name="home" backgroundColor="#2CB9B0" size={30} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate(routes.HOME);
              }}
              labelStyle={{
                fontFamily: FONT_SEMIBOLD,
                color: colors.bitblue,
                fontSize: 12,
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="human-male-height"
                  backgroundColor="orange"
                  size={30}
                />
              )}
              label="Size Chart"
              onPress={() => {
                props.navigation.navigate(routes.SIZECHART);
              }}
              labelStyle={{
                fontFamily: FONT_SEMIBOLD,
                color: colors.bitblue,
                fontSize: 12,
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
                props.navigation.navigate(routes.PROFILE);
              }}
              labelStyle={{
                fontFamily: FONT_SEMIBOLD,
                color: colors.bitblue,
                fontSize: 12,
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="palette" backgroundColor="#00008B" size={30} />
              )}
              label="Recommend Colors"
              onPress={() => {
                props.navigation.navigate(routes.RECOMMENEDCOLOR);
              }}
              labelStyle={{
                fontFamily: FONT_SEMIBOLD,
                color: colors.bitblue,
                fontSize: 12,
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
              labelStyle={{
                fontFamily: FONT_SEMIBOLD,
                color: colors.bitblue,
                fontSize: 12,
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="logout" backgroundColor="black" size={size} />
              )}
              label="Logout"
              onPress={() => logOut()}
              labelStyle={{
                fontFamily: FONT_SEMIBOLD,
                color: colors.bitblue,
                fontSize: 12,
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

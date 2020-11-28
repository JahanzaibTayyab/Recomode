import React from 'react'
import { ScrollView, Switch, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'

import BaseIcon from './Icon'
import Chevron from './Chevron'
import InfoText from './InfoText'
import Nav from '../../components/Nav'
import { FONT_MEDIUM, FONT_SEMIBOLD, FONT_BOLD, FONT_Regular } from "../../config/Constant"
import colors from '../../config/colors'
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    flex: 1
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
})

function SettingsScreen(props) {
  const [value, setValue] = React.useState(true)
  return (
    <>
      <View style={{ flex: 1 }}>
        <Nav navigation={props.navigation} />
        <ScrollView style={styles.scroll}>
          <View style={styles.userRow}>
            <View style={styles.userImage}>
              <Avatar
                rounded
                size="large"
                source={require("../../assets/images/userprofile.jpg")}
              />
            </View>
            <View style={{ marginHorizontal: 10, }}>
              <Text style={{ fontSize: 30, color: "black", fontFamily: FONT_BOLD }}>Jahanzaib</Text>
              <Text
                style={{
                  color: colors.medium,
                  fontSize: 12,
                  fontFamily: FONT_SEMIBOLD,
                }}
              >
                jtayyab204@gmail.com
            </Text>
              <TouchableOpacity style={{ marginTop: 10, }}
                onPress={() => console.log("Login Press from User")}
              >
                <Text style={{ fontFamily: FONT_SEMIBOLD, fontSize: 12, color: colors.COLOR_FILLED }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <InfoText text="Account" />
          <View>
            <ListItem
              hideChevron
              title="Push Notifications"
              containerStyle={styles.listItemContainer}
              rightElement={
                <Switch
                  onValueChange={() => setValue(!value)}
                  value={value}
                />
              }
              leftIcon={
                <BaseIcon
                  containerStyle={{
                    backgroundColor: '#FFADF2',
                  }}
                  icon={{
                    type: 'material',
                    name: 'notifications',
                  }}
                />
              }
            />
            <ListItem
              // chevron
              title="Currency"
              rightTitle="Pk"
              rightTitleStyle={{ fontSize: 15 }}
              onPress={() => this.onPressSetting()}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#FAD291' }}
                  icon={{
                    type: 'font-awesome',
                    name: 'money',
                  }}
                />
              }
              rightIcon={<Chevron />}
            />
            <ListItem
              title="Location"
              rightTitle="Pakistan"
              rightTitleStyle={{ fontSize: 15 }}
              onPress={() => this.onPressSetting()}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#57DCE7' }}
                  icon={{
                    type: 'material',
                    name: 'place',
                  }}
                />
              }
              rightIcon={<Chevron />}
            />
            <ListItem
              title="Language"
              rightTitle="English"
              rightTitleStyle={{ fontSize: 15 }}
              onPress={() => this.onPressSetting()}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#FEA8A1' }}
                  icon={{
                    type: 'material',
                    name: 'language',
                  }}
                />
              }
              rightIcon={<Chevron />}
            />
          </View>
          <InfoText text="More" />
          <View>
            <ListItem
              title="About US"
              onPress={() => this.onPressSetting()}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#A4C8F0' }}
                  icon={{
                    type: 'ionicon',
                    name: 'md-information-circle',
                  }}
                />
              }
              rightIcon={<Chevron />}
            />
            <ListItem
              title="Terms and Policies"
              onPress={() => this.onPressSetting()}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{ backgroundColor: '#C6C7C6' }}
                  icon={{
                    type: 'entypo',
                    name: 'light-bulb',
                  }}
                />
              }
              rightIcon={<Chevron />}
            />
            <ListItem
              title="Share our App"
              onPress={() => this.onPressSetting()}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{
                    backgroundColor: '#C47EFF',
                  }}
                  icon={{
                    type: 'entypo',
                    name: 'share',
                  }}
                />
              }
              rightIcon={<Chevron />}
            />
            <ListItem
              title="Rate Us"
              onPress={() => this.onPressSetting()}
              containerStyle={styles.listItemContainer}
              leftIcon={
                <BaseIcon
                  containerStyle={{
                    backgroundColor: '#FECE44',
                  }}
                  icon={{
                    type: 'entypo',
                    name: 'star',
                  }}
                />
              }
              rightIcon={<Chevron />}
            />
            <ListItem
              title="Send FeedBack"
              onPress={() => this.onPressSetting()}
              containerStyle={styles.listItemContainer}
              badge={{
                value: 999,
                textStyle: { fontSize: 14, color: 'white' },
              }}
              leftIcon={
                <BaseIcon
                  containerStyle={{
                    backgroundColor: '#00C001',
                  }}
                  icon={{
                    type: 'materialicon',
                    name: 'feedback',
                  }}
                />
              }
              rightIcon={<Chevron />}
            />
          </View>
          <Text></Text>
        </ScrollView>
      </View>
    </>
  )
}

export default SettingsScreen

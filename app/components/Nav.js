import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements'
import { Platform } from 'react-native'
import PropTypes from 'prop-types'

import colors from '../config/colors'

const Search = ({ title, navigation }) => (
  <SafeAreaView style={{ backgroundColor: 'white', height: 50 }}>
    <View style={styles.leftRow}>
      <TouchableOpacity
        style={{ marginHorizontal: 10, }}
        onPress={() => navigation.openDrawer()}
      >
        <Image source={require("../images/icons/icon-homes.png")} style={{ marginTop: 10, }} resizeMode="contain" />
      </TouchableOpacity>
      <View style={{ justifyContent: "flex-start", marginHorizontal: 100, }}>
        <Image source={require("../images/logo-main.png")} style={{ height: 100, width: 100, marginTop: -30 }} resizeMode="contain" />
      </View>
    </View>
  </SafeAreaView>
)
const styles = StyleSheet.create({
  centerRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'flex-start',
    marginTop: 2.8,
  },
  iconContainer: {
    alignSelf: 'center',
  },
  leftRow: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
  },
  logoutText: {
    color: colors.bitblue,
    fontSize: 18,
    fontWeight: '400',
  },
  rightRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
})
export default Search

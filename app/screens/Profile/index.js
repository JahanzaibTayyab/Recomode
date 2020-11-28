import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'


import Profile from './Profile'

const SettingScreen = (props) => {
  return <Profile {...props} />
}

SettingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SettingScreen

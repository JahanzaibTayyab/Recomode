import React from 'react'
import { Icon } from 'react-native-elements'
import colors from '../../config/colors'

const Chevron = () => (
  <Icon
    name="chevron-right"
    type="entypo"
    color={colors.lightGrey}
    containerStyle={{ marginLeft: -15, width: 20 }}
  />
)

export default Chevron

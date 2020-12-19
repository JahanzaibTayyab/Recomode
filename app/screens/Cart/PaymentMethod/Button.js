import React, { PureComponent } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  Platform,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
export default Button = (props) => {
  propTypes = {
    text: PropTypes.string.isRequired,
    disabledText: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.any,
    onPress: PropTypes.func.isRequired,
  }
  defaultProps = {
    disabledText: '',
    loading: false,
    disabled: false,
    style: undefined,
  }

  const handlePress = (event) => {
    const { loading, disabled, onPress } = props

    if (loading || disabled) {
      return
    }

    if (onPress) {
      onPress(event)
    }
  }
  const { text, disabledText, loading, disabled, style, ...rest } = props
  return (
    <TouchableHighlight
      {...rest}
      style={[styles.button, style]}
      underlayColor="rgba(0,0,0,0.5)"
      onPress={handlePress}>
      <View>
        {loading &&
          <ActivityIndicator
            animating
            size="small"
          />
        }
        {!loading && !disabled &&
          <Text>
            {text}
          </Text>
        }
        {!loading && disabled &&
          <Text>
            {disabledText || text}
          </Text>
        }
      </View>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 10,
    height: Platform.OS === 'ios' ? 35 : 40,
    minWidth: 160,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    alignItems: 'center',
  },
})

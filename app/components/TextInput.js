import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from '../config/styles';
import colors from '../config/colors';
function AppTextInput({
  icon,
  showpassword,
  onPress,
  width = '90%',
  error,
  touched,
  ...otherProps
}) {
  const reColor = !touched
    ? colors.secondary
    : error
    ? colors.danger
    : colors.primary;
  return (
    <View style={[styles.container, {width}, {borderColor: reColor}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={reColor}
          style={styles.icon}
        />
      )}
      <View style={{alignItems: 'flex-end'}}>
        {showpassword && (
          <MaterialCommunityIcons
            name={showpassword}
            size={17}
            color={reColor}
            style={styles.showicon}
            onPress={onPress}
          />
        )}
      </View>
      {/* <View
        style={{
          alignItems: 'flex-end',
          backgroundColor: !error ? colors.primary : colors.danger,
        }}>
        {touched && (
          <MaterialCommunityIcons
            name={!error ? 'check' : 'x'}
            size={17}
            color="white"
            style={styles.showerror}
          />
        )}
      </View> */}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        underlineColorAndroid="transparent"
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    alignSelf: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    paddingRight: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 15,
    marginLeft: 10,
  },
  showicon: {
    marginRight: 10,
    marginTop: 15,
    marginLeft: 10,
    position: 'absolute',
    left: 210,
  },
  showerror: {
    marginRight: 10,
    marginTop: 15,
    marginLeft: 10,
    position: 'absolute',
    left: 210,
  },
});

export default AppTextInput;

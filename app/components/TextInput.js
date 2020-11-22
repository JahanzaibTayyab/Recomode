import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

import defaultStyles from '../config/styles';
import colors from '../config/colors';
const { width } = Dimensions.get('window');
function AppTextInput({
  icon,
  showpassword,
  onPress,
  width = '100%',
  error,
  touched,
  // height = "50%",
  ...otherProps
}) {
  const reColor = !touched
    ? colors.secondary
    : error
      ? colors.danger
      : colors.primary;
  return (
    <View style={[styles.container, { width }, { borderColor: reColor }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={reColor}
          style={styles.icon}
        />
      )}
      <View
        style={{
          alignItems: 'flex-end',
        }}>
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
      <View
        style={[
          styles.showerror,
          {
            backgroundColor: !error
              ? !touched
                ? colors.white
                : colors.primary
              : colors.danger,
          },
          // {left:}
        ]}>
        {touched && (
          <FeatherIcons name={!error ? 'check' : 'x'} size={10} color="white" />
        )}
      </View>
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
    left: width - 180,
  },
  showerror: {
    alignItems: 'center',
    height: 18,
    width: 18,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    position: 'absolute',
    left: width - 100,
  },
});

export default AppTextInput;

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
  ...otherProps
}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <View style={{alignItems: 'flex-end'}}>
        {showpassword && (
          <MaterialCommunityIcons
            name={showpassword}
            size={17}
            color={defaultStyles.colors.medium}
            style={styles.showicon}
            onPress={onPress}
          />
        )}
      </View>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 25,
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
});

export default AppTextInput;

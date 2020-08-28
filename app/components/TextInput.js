import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from '../config/styles';
import colors from '../config/colors';
function AppTextInput({icon, width = '100%', ...otherProps}) {
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
    backgroundColor: defaultStyles.colors.light,
    borderColor: colors.lightGrey,
    borderWidth: 1,

    borderRadius: 25,
    flexDirection: 'row',
    // padding: 15,
    paddingRight: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 15,
  },
});

export default AppTextInput;

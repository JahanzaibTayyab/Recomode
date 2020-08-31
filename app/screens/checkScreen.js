import React from 'react';
import {View, Text} from 'react-native';

import Button from '../components/Button';

export default function checkScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Button title="Check" width="60%"></Button>
    </View>
  );
}

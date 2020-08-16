import React from 'react';
import {View, Text} from 'react-native';

import WelccomeView from './WelcomeView';

function WelcomeContainer(props) {
  return <WelccomeView {...this.props} />;
}
export default WelcomeContainer;

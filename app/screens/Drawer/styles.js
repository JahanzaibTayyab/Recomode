import {StyleSheet} from 'react-native';

import colors from '../../config/colors';
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  content: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 75,
    justifyContent: 'center',
    padding: 15,
  },
  foteerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderTopLeftRadius: 75,
  },
  innerFooterbox: {
    flex: 0.1,
    backgroundColor: 'white',
  },
  innerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderBottomRightRadius: 75,
  },
  upperbox: {
    flex: 0.12,
    backgroundColor: 'white',
  },
  upperText: {
    flex: 1,
    paddingTop: 5,
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'SFProText-Regular',
  },
  userName: {fontFamily: 'SFProText-Bold', fontSize: 20},
  userEmail: {
    alignSelf: 'center',
    fontFamily: 'SFProText-Regular',
    color: 'blue',
  },
});

export default styles;

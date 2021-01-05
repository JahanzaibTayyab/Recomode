import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {
  FONT_BOLD,
  FONT_SEMIBOLD,
  FONT_Regular,
  FONT_LIGHT,
  FONT_MEDIUM,
} from '../../../config/Constant';

const styles = StyleSheet.create({
  conatiner: {flex: 1, backgroundColor: colors.white},
  table: {width: 360, flexDirection: 'row'},
  head: {backgroundColor: '#333', height: 40},
  headText: {color: '#fff', textAlign: 'center'},
  titleText: {marginLeft: 6},
  list: {height: 30, backgroundColor: '#f0f0f0'},
  listText: {textAlign: 'right', marginRight: 6},
});
export default styles;

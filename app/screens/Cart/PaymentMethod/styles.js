import constants from '../../../assets/stylesheet/Constants';
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
const styles = StyleSheet.create({
  keyboardAwareScrollView: {
    flex: 1,
    backgroundColor: constants.COLOR_WHITE,
  },
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.COLOR_WHITE,
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: constants.COLOR_WHITE,
  },
  buttonText: {
    borderColor: colors.bitblue,
    shadowColor: colors.COLOR_FILLED,
    marginBottom: 8,
    flexDirection: 'row',
    height: 100,
    marginTop: 10,
    borderWidth: 0.2,
    borderRadius: 5,
    overflow: 'hidden',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fullContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  blurViewStyles: {
    position: 'absolute',
    width: constants.SCREEN_WIDTH,
    height: constants.SCREEN_HEIGHT,
  },
  containerOnModal: {
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: constants.COLOR_SHADOW,
    shadowOpacity: 0.1,
    elevation: 1,
    shadowRadius: 10,
    backgroundColor: constants.COLOR_WHITE,
    shadowOffset: {width: 0, height: 1},
    height: 389,
  },
  label: {
    fontFamily: constants.FONT_FAMILY_SEMIBOLD,
    fontSize: 14,
  },
  input: {
    fontFamily: constants.FONT_FAMILY_REGULAR,
    fontSize: 12,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    opacity: 0.8,
    width: '100%',
    zIndex: 1,
  },
});

export default styles;

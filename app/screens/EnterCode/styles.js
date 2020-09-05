import {StyleSheet, Dimensions} from 'react-native';
export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';
import colors from '../../config/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    justifyContent: 'flex-end',
  },
  upperbox: {flex: 0.1, backgroundColor: colors.white},
  innerbox: {
    flex: 1,
    backgroundColor: colors.bitblue,
    borderBottomRightRadius: 75,
  },
  content: {flex: 0.9, backgroundColor: colors.bitblue},
  contentdata: {
    position: 'absolute',
    backgroundColor: colors.white,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: 'flex-start',
    padding: 15,
    paddingBottom: 40,
    justifyContent: 'flex-end',
  },
  contentdata2: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 75,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,
    // paddingBottom: 20,
  },
  titlecontainer: {flex: 1, alignItems: 'center', textAlign: 'center'},
  titleheader: {
    fontFamily: 'SFProText-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    flex: 1,
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
    padding: 5,
    color: colors.medium,
  },
  footerdata: {
    //flex: 0.1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  footertitle: {
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
    color: colors.white,
  },
  footer: {
    flex: 0.2,
    backgroundColor: colors.white,
    // position: 'absolute',
    // alignSelf: 'center',
    // top: height / 1.1,
    // width: '100%',
    // height: undefined,
  },
  innerfooter: {flex: 1, backgroundColor: colors.bitblue},
  //EnterCode Styling

  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
    flex: 1,
    // marginVertical: 150,
    // position: 'absolute',
    paddingTop: 280,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3557b7',
    justifyContent: 'center',
    minWidth: 300,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;

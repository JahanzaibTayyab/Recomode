import { Dimensions } from 'react-native';
export const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
export const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const { height } = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.55 * height;
export const BORDER_RADIUS = 75;
export const FONT_BLACK = "Montserrat-Black";
export const FONT_BOLD = "Montserrat-Bold";
export const FONT_BOLDITALIC = "Montserrat-ExtraBold";
export const FONT_ITALIC = "Montserrat-Italic";
export const FONT_LIGHT = "Montserrat-Light";
export const FONT_MEDIUM = "Montserrat-Medium";
export const FONT_SEMIBOLD = "Montserrat-SemiBold";
export const FONT_Regular = "Montserrat-Regular";
export const FONT_THIN = "Montserrat-Thin";
export const FONT_SEMIBOLDAlter = "MontserratAlternates-SemiBold";
export const SFPRO_TEXT_BOLD = "SFProText-Bold";
export const SFPRO_TEXT_REGULAR = "SFProText-Regular";
export const SFPRO_TEXT_SEMIBOLD = "SFProText-Semibold";
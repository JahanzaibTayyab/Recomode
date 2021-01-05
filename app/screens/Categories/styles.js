import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import { FONT_BOLD, FONT_SEMIBOLD, FONT_Regular, FONT_LIGHT, FONT_MEDIUM } from "../../config/Constant"

const styles = StyleSheet.create({
    boxcontainer: {
        flex: 1,
    },
    textHeader: {
        justifyContent: "center", alignSelf: "center", fontFamily: FONT_BOLD, color: "white", fontSize: 30
    },
    subText: {
        justifyContent: "center", alignSelf: "center", fontFamily: FONT_MEDIUM, color: "white", fontSize: 15
    },
    layout: {
        position: "absolute",
        backgroundColor: "black",
        height: "100%",
        opacity: 0.3,
        width: "100%",
        // zIndex: 1,
    }
});
export default styles;

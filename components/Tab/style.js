import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    tab: {
        backgroundColor: '#2979F2',
        height: verticalScale(50),
        justifyContent: 'center',
        borderRadius: horizontalScale(50)

    },
    title: {
        fontFamily: FONT_FAMILY,
        fontSize: scaleFontSize(14),
        fontWeight: '500',
        lineHeight: scaleFontSize(17),
        color: '#FFFFFF',
        textAlign: 'center'
    },
    inactiveTab: {
        backgroundColor: '#F3F5F9'
    },
    inactiveTitle: {
        color: '#79869F'
    }
})

export default style;
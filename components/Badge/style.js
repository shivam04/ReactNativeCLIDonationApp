import { StyleSheet } from "react-native";
import { FONT_FAMILY } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    badge: {
        backgroundColor: '#145855',
        height: verticalScale(22),
        justifyContent: 'center',
        borderRadius: horizontalScale(50)

    },
    title: {
        fontFamily: FONT_FAMILY,
        fontSize: scaleFontSize(10),
        fontWeight: '600',
        lineHeight: scaleFontSize(12),
        color: '#FFFFFF',
        textAlign: 'center'
    }
})

export default style;
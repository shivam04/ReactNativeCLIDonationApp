import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
    paymentContainer: {
        marginHorizontal: horizontalScale(24)
    },
    donationAmountDescription: {
        marginTop: verticalScale(12)
    },
    button: {
        marginHorizontal: horizontalScale(24)
    }
})

export default style;
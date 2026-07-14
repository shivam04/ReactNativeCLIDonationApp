import { Platform } from 'react-native';

const FONT_FAMILY =
    Platform.OS === 'ios' ? 'Inter24pt' : 'Inter_24pt';

export const getFontFamily = (weight) => {
    switch (weight) {
        case '100':
            return `${FONT_FAMILY}-Thin`;
        case '200':
            return `${FONT_FAMILY}-ExtraLight`;
        case '300':
            return `${FONT_FAMILY}-Light`;
        case '400':
        case 'normal':
            return `${FONT_FAMILY}-Regular`;
        case '500':
            return `${FONT_FAMILY}-Medium`;
        case '600':
            return `${FONT_FAMILY}-SemiBold`;
        case '700':
        case 'bold':
            return `${FONT_FAMILY}-Bold`;
        case '800':
            return `${FONT_FAMILY}-ExtraBold`;
        case '900':
            return `${FONT_FAMILY}-Black`;
        default:
            return `${FONT_FAMILY}-Regular`;
    }
};
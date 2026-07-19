import { SafeAreaView } from 'react-native-safe-area-context';
import style from './style';
import { ScrollView, Text, View } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';

const Payment = () => {
    const donationItemInformation = useSelector(state => state.donations.selectedDonationInformation);
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView style={style.paymentContainer}>
                <Header title={'Making Donations'} />
                <Text style={style.donationAmountDescription}>You are about to donate {donationItemInformation.price}</Text>
                <View />
            </ScrollView>
            <View style={style.button} >
                <Button title={"Donate"} />
            </View>
        </SafeAreaView>
    )
}

export default Payment;
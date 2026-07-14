import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import globalStyle from '../../assets/styles/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title={'Crowd Funding'} type={1} />
            <Button title={'Donate'} onPress={() => console.log("You Just Pressed Me")} />
            <Button title={'Donate'} isDisabled={true} />
        </SafeAreaView>
    )
}

export default Home;
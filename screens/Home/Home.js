import Header from '../../components/Header/Header';
import globalStyle from '../../assets/styles/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title={'Crowd Funding'} type={1} />
        </SafeAreaView>
    )
}

export default Home;
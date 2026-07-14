import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Badge from '../../components/Badge/Badge';
import Tab from '../../components/Tab/Tab';
import Search from '../../components/Search/Search';
import globalStyle from '../../assets/styles/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title={'Crowd Funding'} type={1} />
            <Button title={'Donate'} onPress={() => console.log("You Just Pressed Me")} />
            <Button title={'Donate'} isDisabled={true} />
            <Tab title={'Highlight'} />
            <Tab title={'Highlight'} isInactive={true} />
            <Badge title={'Environment'} />
            <Search onSearch={(value) => console.log(value)} />
        </SafeAreaView>
    )
}

export default Home;
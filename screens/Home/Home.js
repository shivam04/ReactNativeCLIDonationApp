import globalStyle from '../../assets/styles/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Pressable, Text } from 'react-native';
import { updateFirstName } from '../../redux/reducers/User';

const Home = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <Header title={`${user.firstName} ${user.lastName}`} />
            <Pressable onPress={() => dispatch(updateFirstName({ firstName: 'S' }))}>
                <Text>Press me to change First Name</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Home;
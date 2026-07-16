import globalStyle from '../../assets/styles/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import style from './style';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';

const Home = () => {
    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View>
                        <Text style={style.headerIntroText}>Hello, </Text>
                        <View style={style.userName}>
                            <Header title={`${user.firstName} ${user.lastName[0]}.`} />
                        </View>
                    </View>
                    <Image
                        source={{ uri: user.profileImage }}
                        style={style.profileImage}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={style.searchBox}>
                    <Search placeHolder={'Search'} />
                </View>
                <Pressable style={style.highlightedImageContainer}>
                    <Image
                        style={style.highlightedImage}
                        source={require('../../assets/images/highlighted_image.png')}
                        resizeMode={'contain'}
                    />
                </Pressable>
                <View style={style.categoryHeader}>
                    <Header title={'Select Category'} type={2} />
                </View>
                <View style={style.categories}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categories.categories}
                        renderItem={({ item }) =>
                            <View style={style.categoryItem} key={item.categoryId}>
                                <Tab
                                    title={item.name}
                                    isInactive={item.categoryId !== categories.selectedCategoryId}
                                    onPress={(value) => dispatch(updateSelectedCategoryId(value))}
                                    tabId={item.categoryId}
                                />
                            </View>}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
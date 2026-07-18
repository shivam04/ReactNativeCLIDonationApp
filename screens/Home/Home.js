import globalStyle from '../../assets/styles/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import style from './style';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
import { useEffect, useState } from 'react';
import { updateSelectedDonationId } from '../../redux/reducers/Donations';
import { Route } from '../../navigation/Route';
import { resetToInitialState } from '../../redux/reducers/User';
import { logOut } from '../../api/user';

const Home = ({ navigation }) => {
    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    const [categoryPage, setCategoryPage] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const donations = useSelector(state => state.donations);
    const [donationItems, setDonationItems] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);

    const categoryPageSize = 4;

    useEffect(() => {
        const items = donations.items.filter(value =>
            value.categoryIds.includes(categories.selectedCategoryId)
        );
        setDonationItems(items);
    }, [categories.selectedCategoryId])

    useEffect(() => {
        setIsLoadingCategories(true);
        setCategoryList(
            pagination(categories.categories, categoryPage, categoryPageSize)
        )
        setCategoryPage(prev => prev + 1);
        setIsLoadingCategories(false);
    }, [])


    const pagination = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= items.length) {
            return [];
        }

        return items.slice(startIndex, endIndex);
    }

    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View>
                        <Text style={style.headerIntroText}>Hello, </Text>
                        <View style={style.userName}>
                            <Header title={`${user.displayName}`} />
                        </View>
                    </View>
                    <View>
                        <Image
                            source={{ uri: user.profileImage }}
                            style={style.profileImage}
                            resizeMode={'contain'}
                        />
                        <Pressable onPress={async () => {
                            dispatch(resetToInitialState())
                            await logOut();
                        }}>
                            <Header type={3} title={'Logout'} color={'#156CF7'} />
                        </Pressable>
                    </View>
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
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            if (isLoadingCategories) return;
                            setIsLoadingCategories(true);
                            let newData = pagination(
                                categories.categories,
                                categoryPage,
                                categoryPageSize
                            );
                            if (newData.length > 0) {
                                setCategoryList(prevState => [...prevState, ...newData]);
                                setCategoryPage(prev => prev + 1);
                            }
                            setIsLoadingCategories(false);
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categoryList}
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
                {
                    donationItems.length > 0 &&
                    <View style={style.donationItemsContainer}>
                        {donationItems.map(donationItem => {
                            const categoryInformation = categories.categories.find(
                                val => val.categoryId === categories.selectedCategoryId,
                            );
                            return (
                                <View
                                    key={donationItem.donationItemId}
                                    style={style.singleDonationItem}
                                >
                                    <SingleDonationItem
                                        donationItemId={donationItem.donationItemId}
                                        donationTitle={donationItem.name}
                                        badgeTitle={categoryInformation.name}
                                        uri={donationItem.image}
                                        onPress={(selectedDonationItemId) => {
                                            dispatch(
                                                updateSelectedDonationId(
                                                    selectedDonationItemId
                                                )
                                            );
                                            navigation.navigate(Route.SingleDonationItem, {
                                                categoryInformation
                                            });
                                        }}
                                        price={parseFloat(donationItem.price)}
                                    />
                                </View>
                            )
                        })}
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
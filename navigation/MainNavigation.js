import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Route } from './Route';
import Home from "../screens/Home/Home";
import SingleDonationItem from "../screens/SingleDonationItem/SingleDonationItem";
import Login from "../screens/Login/Login";
import Registration from "../screens/Registration/Registration";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={Route.Login}
            screenOptions={{
                header: () => null,
                headerShown: false
            }}>
            <Stack.Screen name={Route.Home} component={Home} />
            <Stack.Screen
                name={Route.SingleDonationItem}
                component={SingleDonationItem}
            />
            <Stack.Screen name={Route.Login} component={Login} />
            <Stack.Screen name={Route.Registration} component={Registration} />
        </Stack.Navigator>
    )
}

export default MainNavigation;
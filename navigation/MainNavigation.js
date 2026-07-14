import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Route } from './Route';
import Home from "../screens/Home/Home";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            header: () => null,
            headerShown: false
        }}>
            <Stack.Screen name={Route.Home} component={Home} />
        </Stack.Navigator>
    )
}

export default MainNavigation;
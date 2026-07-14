/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

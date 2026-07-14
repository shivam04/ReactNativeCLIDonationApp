/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;

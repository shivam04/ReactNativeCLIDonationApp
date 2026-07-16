/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;

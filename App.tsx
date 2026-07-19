/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import RootNavigation from './navigation/RootNavigation';
import { AppState } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect, useRef } from 'react';
import { checkToken } from './api/user';
import BootSplash from "react-native-bootsplash"

function App() {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log("Background to foreground")
        await checkToken();
      }
      appState.current = nextAppState;
    });
    console.log("App Rendered")
    checkToken();
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer onReady={() => {
          BootSplash.hide();
        }}>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;

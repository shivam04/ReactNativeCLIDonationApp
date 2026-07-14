/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getFontFamily } from './assets/fonts/helper';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.title}>Hello World!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 70,
    fontFamily: getFontFamily('800'),
  },
});

export default App;

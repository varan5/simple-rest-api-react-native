import React from 'react';
import DataDisplayScreen from './screens/DataDisplay/DataDisplayScreen';
import PurchaseCoinsScreen from './screens/PurchaseCoins/PurchaseCoinsScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainerStyle}>
      {/* <DataDisplayScreen /> */}
      <PurchaseCoinsScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainerStyle: {
    backgroundColor: 'grey',
    flex: 1,
  },
});

export default App;

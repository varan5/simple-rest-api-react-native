import React from 'react';
import DataDisplayScreen from './screens/DataDisplay/DataDisplayScreen';
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
      <DataDisplayScreen />
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

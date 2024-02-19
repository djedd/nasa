// Libraries
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// Components
import Home from '@/views/home';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default App;

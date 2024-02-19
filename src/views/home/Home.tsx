// Libraries
import React from 'react';
import {StyleSheet, View} from 'react-native';
// Components
import Header from '@/components/header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 5,
  },
});

export default Home;

// Libraries
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
// Components
import Header from '@/components/header';
import fetchApi from '@/utils/fetch';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState();

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const data = await fetchApi();
        setTodaysImage(data);
      } catch (e) {
        console.error(e);
        setTodaysImage(undefined);
      }
    };

    loadTodaysImage().catch(null);
  }, []);

  console.log(todaysImage);

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

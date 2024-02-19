// Libraries
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {format, sub} from 'date-fns';
// Components
import Header from '@/components/header';
import TodaysImage from '@/components/todaysImage';
import LastFiveDaysImages from '@/components/lastFiveDaysImages';
// Services
import fetchApi from '@/utils/fetch';
// Types
import {PostImage} from '@/types';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>();
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

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

    const loadLast5DaysImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
        const data = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        );
        setLastFiveDaysImages(data);
      } catch (e) {
        console.error(e);
      }
    };
    loadTodaysImage().catch(null);
    loadLast5DaysImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
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

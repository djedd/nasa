// Libraries
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// Types
import {RootStackParams} from '@/types';
// Components
import Header from '@/components/header';
import Media from '@/components/media/Media';

const Detail = () => {
  const {
    params: {title, url, explanation, date, media_type},
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();
  const styles = getStyles(media_type);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.mediaContainer}>
          {url && media_type && <Media media_type={media_type} url={url} />}
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const getStyles = (media_type: string = 'image') => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(7,26,93,255)',
    },
    content: {
      flex: 1,
      backgroundColor: '#2c449d',
      marginVertical: 24,
      borderRadius: 32,
      padding: 16,
    },
    mediaContainer: {
      borderRadius: media_type === 'image' ? 32 : 0,
      height: 200,
    },
    date: {
      color: 'white',
      fontSize: 16,
      marginBottom: 16,
    },
    title: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    explanationContainer: {
      flex: 1,
      marginVertical: 16,
    },
    explanation: {
      color: 'white',
      fontSize: 16,
    },
  });
};
export default Detail;

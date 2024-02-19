// Libraries
import React, {FC} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
// Types
import {PostImage} from '@/types';

const TodaysImage: FC<PostImage> = ({date, title, url}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: url}} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 32,
  },
  image: {
    width: '100%',
    height: 190,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 32,
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default TodaysImage;

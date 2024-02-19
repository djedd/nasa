// Libraries
import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Types
import {PostImageNavigationProps, PostImage as PostImageType} from '@/types';

const PostImage: FC<PostImageType> = ({title, date, url, explanation}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18,39,113,255)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  date: {
    color: 'white',
  },
});

export default PostImage;

// Libraries
import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Types
import {PostImage, PostImageNavigationProps} from '@/types';
// Components
import Media from '../media/Media';

const TodaysImage: FC<PostImage> = ({
  date,
  title,
  url,
  media_type,
  explanation,
}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();

  const styles = getStyles(media_type);

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation, media_type});
  };

  return (
    <View style={styles.container}>
      <View style={styles.mediaContainer}>
        {url && media_type && <Media media_type={media_type} url={url} />}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const getStyles = (media_type: string = 'image') => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#2c449d',
      marginVertical: 16,
      marginHorizontal: 24,
      borderRadius: 32,
      padding: 16,
    },
    mediaContainer: {
      borderWidth: 2,
      borderRadius: media_type === 'image' ? 32 : 0,
      height: 200,
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
};

export default TodaysImage;

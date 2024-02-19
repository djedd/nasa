// Libraries
import React, {FC} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
// Types
import {PostImage} from '@/types';

const TodaysImage: FC<PostImage> = ({date, title, url, media_type}) => {
  const styles = getStyles(media_type);
  const getImageOrVideo = () => {
    switch (media_type) {
      case 'image':
        return <Image source={{uri: url}} style={styles.image} />;
      case 'video':
        return url && <WebView source={{uri: url}} style={styles.video} />;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mediaContainer}>{url && getImageOrVideo()}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" />
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
    image: {
      width: '100%',
      height: 190,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 32,
      padding: 16,
    },
    video: {
      width: '100%',
      height: '100%',
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

//Libraries
import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
//Types
import {PostImage} from '@/types';

const Media: FC<PostImage> = ({media_type, url}) => {
  const getMedia = () => {
    switch (media_type) {
      case 'image':
        return <Image source={{uri: url}} style={styles.image} />;
      case 'video':
        return url && <WebView source={{uri: url}} style={styles.video} />;
      default:
        return <Image source={{uri: url}} style={styles.image} />;
    }
  };

  return getMedia();
};

const styles = StyleSheet.create({
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
});

export default Media;

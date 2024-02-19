// Libraries
import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
// Types
import {PostImage as PostImageTypes} from '@/types';
// Components
import PostImage from '../PostImage';

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({
  postImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView>
        {postImages?.map(postImage => (
          <PostImage key={`post_image_${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginBottom: 18,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDaysImages;

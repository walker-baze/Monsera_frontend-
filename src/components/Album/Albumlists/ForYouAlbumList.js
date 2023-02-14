import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import AlbumContainer from '../AlbumConatiner';

const ForYouAlbumList = (props) => {
  const forYouAlbumData = [
    {
      albumName: 'For You Album 1',
      artistName: 'For You Artist 1',
      imageUri: 'https://example.com/forYouAlbum1.jpg'
    },
    {
      albumName: 'For You Album 2',
      artistName: 'For You Artist 2',
      imageUri: 'https://example.com/forYouAlbum2.jpg'
    },
    // Add more "For You" albums here...
  ];

  return (
    <View>
      <Text style={styles.categoryHeader}>For You</Text>
      <FlatList
        data={forYouAlbumData}
        renderItem={({ item, index }) => (
          <AlbumContainer
            albumName={item.albumName}
            artistName={item.artistName}
            imageUri={item.imageUri}
            navigate={props.navigate}
            hasSmallDisc={false}
            style={[
              styles.container,
              {
                left: (index * 120) + 27,
                top: (index * 120) + 172
              }
            ]}
          />
        )}
        keyExtractor={(item) => item.albumName}
      />
    </View>
  );
};

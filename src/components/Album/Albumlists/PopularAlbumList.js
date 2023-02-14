import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AlbumContainer from '../AlbumContainer';

const PopularAlbumList = (props) => {
  const popularAlbumData = [
    {
      albumName: 'Popular Album 1',
      artistName: 'Popular Artist 1',
      imageUri: 'https://example.com/popularAlbum1.jpg'
    },
    {
      albumName: 'Popular Album 2',
      artistName: 'Popular Artist 2',
      imageUri: 'https://example.com/popularAlbum2.jpg'
    },
    // Add more popular albums here...
  ];

  return (
    <View>
      <Text style={styles.categoryHeader}>Popular</Text>
      <FlatList
        data={popularAlbumData}
        renderItem={({ item, index }) => (
          <AlbumContainer
            albumName={item.albumName}
            artistName={item.artistName}
            imageUri={item.imageUri}
            navigate={props.navigate}
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

export default PopularAlbumList;

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AlbumContainer from '../AlbumContainer';

const TrendingAlbumList = (props) => {
  const trendingAlbumData = [
    {
      albumName: 'Trending Album 1',
      artistName: 'Trending Artist 1',
      imageUri: 'https://example.com/trendingAlbum1.jpg'
    },
    {
      albumName: 'Trending Album 2',
      artistName: 'Trending Artist 2',
      imageUri: 'https://example.com/trendingAlbum2.jpg'
    },
    // Add more trending albums here...
  ];

  return (
    <View>
      <Text style={styles.categoryHeader}>Trending</Text>
      <FlatList
        data={trendingAlbumData}
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

export default TrendingAlbumList;

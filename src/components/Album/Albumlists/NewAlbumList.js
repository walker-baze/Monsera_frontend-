import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AlbumContainer from '../AlbumContainer';

const NewAlbumList = (props) => {
  const newAlbumData = [
    {
      albumName: 'New Album 1',
      artistName: 'New Artist 1',
      imageUri: 'https://example.com/newAlbum1.jpg'
    },
    {
      albumName: 'New Album 2',
      artistName: 'New Artist 2',
      imageUri: 'https://example.com/newAlbum2.jpg'
    },
    // Add more new albums here...
  ];

  return (
    <View>
      <Text style={styles.categoryHeader}>New</Text>
      <FlatList
        data={newAlbumData}
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

export default NewAlbumList;

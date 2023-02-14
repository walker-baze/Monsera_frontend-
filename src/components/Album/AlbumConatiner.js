import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const AlbumContainer = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigate('AlbumDetails')}>
      <View style={styles.container}>
        <Image 
          source={{uri: props.imageUri}} 
          style={styles.artistImage} 
        />
        <Text style={styles.albumName}>{props.albumName}</Text>
        <Text style={styles.artistName}>{props.artistName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    width: 94,
    height: 101,
    left: 27,
    top: 172,
    position: 'absolute',
  },
  artistImage: {
    width: 94,
    height: 101,
    borderRadius: 11,
    backgroundColor: '#fff',
  },
  albumName: {
    width: 94,
    height: 23,
    left: 30,
    top: 290,
    position: 'absolute',
    fontFamily: 'Ibarra Real Nova',
    fontWeight: '700',
    fontSize: 15.2564,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  artistName: {
    width: 94,
    height: 23,
    left: 42,
    top: 305,
    position: 'absolute',
    fontFamily: 'Ibarra Real Nova',
    fontWeight: '700',
    fontSize: 15.2564,
    lineHeight: 19,
    color: '#FFFFFF',
  },
};

export default AlbumContainer;

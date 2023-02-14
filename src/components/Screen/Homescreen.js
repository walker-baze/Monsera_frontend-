import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import TopNavBar from '../navbar/TopNavBar';
import BottomNavBar from '../navbar/BottomNavBar';

const HomeScreen = ({ userName, onSpeechRecognition, transcription, command, onLikePress, playPauseIcon, recommendedSongs }) => (
  <View style={styles.container}>
    <TopNavBar />
    <Text style={styles.helloUser}>Hello {userName}</Text>
    <TouchableOpacity onPress={onSpeechRecognition}>
      <Image style={styles.imageButton} source={require('../Assets/Microphonebutton.png')} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Image style={styles.keyboardIcon} source={require('../Assets/Keyboard.png')} />
    </TouchableOpacity>
    <Text style={styles.transcription}>{transcription}</Text>
    <Text style={styles.commandDescription}>Playing "{command}"</Text>
    <View style={styles.flashListContainer}>
      <Text style={styles.playlist}>Playlist</Text>
      {
        recommendedSongs.map((song, index) => (
          <View style={styles.songDetailsGroup} key={index}>
            <Image style={styles.songCover} source={{ uri: song.cover }} />
            <Text style={styles.songName}>{song.name}</Text>
            <Text style={styles.artistName}>{song.artist}</Text>
            <TouchableOpacity onPress={() => onLikePress(song)}>
              <Image style={[styles.likeIcon, song.liked && { tintColor: 'green' }]} source={require('./like.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Image style={styles.playPauseButton} source={playPauseIcon} />
            </TouchableOpacity>
          </View>
        ))
      }
    </View>
    <BottomNavBar />
  </View>
);
const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    helloUser: {
    position: 'absolute',
    width: 109,
    height: 18,
    left: 42,
    top: 107,
    fontFamily: 'Ibarra Real Nova',
    fontWeight: '700',
    fontSize: 15.2564,
    lineHeight: 19,
    color: '#FFFFFF',
    },
    imageButton: {
    position: 'absolute',
    width: 153,
    height: 153,
    left: 114,
    top: 244,
    },
    keyboardIcon: {
    position: 'absolute',
    width: 21,
    height: 21,
    left: 299,
    top: 182,
    backgroundColor: 'transparent',
    },
    transcription: {
    position: 'absolute',
    width: 303,
    height: 40,
    left: 37,
    top: 432,
    fontFamily: 'Ibarra Real Nova',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    color: '#000000',
    },
    commandDescription: {
    position: 'absolute',
    width: 180,
    height: 18,
    left: 37,
    top: 485,
    fontFamily: 'Ibarra Real Nova',
    fontWeight: '700',
    fontSize: 15.2564,
    lineHeight: 19,
    color: '#000000',
    },
    flashListContainer: {
    position: 'absolute',
    width: 324,
    height: 327,
    left: 0,
    top: 527,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    },
    playlist: {
    position: 'absolute',
    width: 53,
    height: 18,
    left: 141,
    top: 536,
    fontFamily: 'Ibarra Real Nova',
    fontWeight: '700',
    fontSize: 15.2564,
    lineHeight: 19,
    color: '#000000',
    },
    songDetailsGroup: {
    position: 'relative',
    width: 324,
    height: 99,
    marginTop: 25,
    },
    songCover: {
    position: 'absolute',
    width: 60,
    height: 60,
    left: 14,
    top: 19,
    backgroundColor: 'transparent',
    },
    songName: {
    position: 'absolute',
    width: 198,
    height: 18,
    left: 99,
    top: 22,
    fontFamily: 'Ibarra Real Nova',
    fontWeight: '700',
    fontSize: 15.2564,
    lineHeight: 19,
    color: '#000000',
    },
    artistName: {
    position: 'absolute',
    width: 165,
    height: 18,
    left: 99,
    top: 56,
    fontFamily: 'Ibarra Real Nova',
    fontWeight: '700',
    fontSize: 15.2564,
    lineHeight: 19,
    color: '#000000',
    },
});
export default Homescreen;
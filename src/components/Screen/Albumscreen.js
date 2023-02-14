import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PopularAlbumList from './Album/Albumlists/PopularAlbumList';
import ForYouAlbumList from './Album/Albumlists/ForYouAlbumList';
import TrendingAlbumList from './Album/Albumlists/TrendingAlbumList';
import NewAlbumList from '../Album/Albumlists/NewAlbumList';
import TopNavBar from './navbar/TopNavBar';
import BottomNavBar from './navbar/BottomNavBar';

const AlbumScreen = (props) => {
  return (
    <View style={styles.container}>
      <TopNavBar />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Albums</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
       <TrendingAlbumList navigate={props.navigate} />
        <PopularAlbumList navigate={props.navigate} />
        <ForYouAlbumList navigate={props.navigate} />
        <NewAlbumList navigate={props.navigate} />
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: 70,
    paddingTop: 30,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: 'Ibarra Real Nova',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF'
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 100
  }
};

export default AlbumScreen;

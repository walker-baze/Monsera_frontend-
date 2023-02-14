//This code is a React Native component that creates a navigation bar at the bottom of the screen. It uses the "Ionicons" library to display icons for three screens: Home, Album, and Playlist. The code keeps track of which screen is active and changes the color of the icon and its label accordingly. The user can navigate to the different screens by tapping on the respective icon. The code also calculates the width of the screen and sets it as the width of the navigation bar. 


import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Math.round(Dimensions.get('window').width);

const BottomNavBar = ({ navigation }) => {
  // State to keep track of the active screen
  const [activeScreen, setActiveScreen] = useState('Homescreen');

  // Function to handle icon press and navigate to the respective screen
  const handlePress = (screen) => {
    navigation.navigate(screen);
    setActiveScreen(screen);
  };

  return (
    <View style={[styles.container, { width: screenWidth }]}>
      {/* Home Icon */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress('Homescreen')}
      >
        <Ionicons
          name="ios-home"
          size={32}
          color={activeScreen === 'Home' ? '#109372' : '#707D7A'}
        />
        <Text
          style={{
            color: activeScreen === 'Home' ? '#109372' : '#707D7A',
            fontSize: 10,
            marginTop: 4,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>

      {/* Album Icon */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress('Albumscreen')}
      >
        <Ionicons
          name="ios-albums"
          size={32}
          color={activeScreen === 'Album' ? '#109372' : '#707D7A'}
        />
        <Text
          style={{
            color: activeScreen === 'Album' ? '#109372' : '#707D7A',
            fontSize: 10,
            marginTop: 4,
          }}
        >
          Album
        </Text>
      </TouchableOpacity>

      {/* Playlist Icon */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handlePress('Playlistscreen')}
      >
        <Ionicons
          name="ios-list"
          size={32}
          color={activeScreen === 'Playlist' ? '#109372' : '#707D7A'}
        />
    <Text
      style={{
        color: activeScreen === 'playlist' ? '#109372' : '#707D7A',
        fontSize: 10,
        marginTop: 4,
      }}
    >
      Playlist
    </Text>
  </TouchableOpacity>
</View>
);
};

// Styles for the navbar component

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1919',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
  },
});

export default BottomNavbar;

//This code is a React Native component that creates a top navigation bar. The bar has three buttons: one for the profile, one for search, and one for favorites. The code uses the useState hook to track if the avatar button has been clicked or not, but this state is not being used for anything in this code. The buttons in the navigation bar trigger navigation to different pages in the app when they are clicked. The style for the navigation bar and its buttons is also defined in this code

// This code defines a custom TopNavBar component for a React Native application.

// First, the required libraries are imported: React and its useState hook, as well as View, Image, and TouchableOpacity from the react-native library.
import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
// The TopNavBar component receives the navigation prop, which allows it to navigate to different screens in the application.

const TopNavBar = ({ navigation }) => { 
    // A state variable is defined to keep track of whether the avatar icon has been clicked or not.
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);
     // The component returns a View component with a specified style (in the styles object), containing three TouchableOpacity components. Each TouchableOpacity component represents an icon that the user can click to navigate to a different screen in the application: profile, search, and favorites.
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profilescreen')}>
        <Image style={styles.avatar} source={require('../Assets/avator.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Searchscreen')}>
        <View style={styles.searchIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favoritesscreen')}>
        <View style={styles.favoritesIcon} />
      </TouchableOpacity>
    </View>
  );
};
// The styles object defines the styling for the container, avatar, searchIcon, and favoritesIcon components.
const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '10%',
    top: 80,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  avatar: {
    width: 26,
    height: 26,
  },
  searchIcon: {
    width: '20%',
    height: '60%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  favoritesIcon: {
    width: 15,
    height: 15,
    backgroundColor: '#000000',
    borderRadius: 7.5,
    alignSelf: 'center',
  },
};

// Finally, the TopNavBar component is exported as the default export.

export default TopNavBar;

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import SplashScreen from './components/Screen/SplashScreen';
import Homescreen from './components/Screen/Homescreen';
import Albumscreen from './components/Screen/Albumscreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Creating a Stack Navigator to navigate between screens
const StackNavigator = createStackNavigator(
{ 
// Defining the route names and the corresponding screens
Splash: SplashScreen,
Home: Homescreen,
Album: Albumscreen,

},
{
// Setting the initial route to the SplashScreen
initialRouteName: 'Splash'
}
);

// Creating an App Container with the Stack Navigator
const AppContainer = createAppContainer(StackNavigator);

function App() {
// State to keep track of the user's login status
const [isLoggedIn, setIsLoggedIn] = useState(false);

// Returns the App Container with screenProps passed to it
return (
<AppContainer
screenProps={{
isLoggedIn,
setIsLoggedIn
}}
/>
);
}

export default App;
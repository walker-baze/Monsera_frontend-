//This code is a React Native component that implements a splash screen for a mobile app. The splash screen displays three images, one of which is a logo, and two text buttons labeled "Log in" and "Sign up". When the user presses either button, they will be navigated to either the login or sign up page, respectively, using the navigation prop. The styles used in the component are defined in a styles object and use the Dimensions API to dynamically determine the dimensions of the device screen.

import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={[styles.logo, { left: screenWidth / 2 - (64 / 2) }]}
          source={require('../Assets/logo.png')}
        />
        <Image
          style={[styles.image1, { left: screenWidth / 2 - (308 / 2) }]}
          source={require('../Assets/image1.png')}
        />
        <Image
          style={[styles.image2, { left: screenWidth / 2 - (308 / 2) }]}
          source={require('../Assets/image2.png')}
        />
        <Text style={styles.text}>Monsera</Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.loginButton, { left: screenWidth / 2 - (68 / 2) }]}>Log in</Text>
          </TouchableOpacity>
    
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={[styles.signupButton, { left: screenWidth / 2 - (88 / 2) }]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 64,
    height: 64,
    top: screenHeight / 2 - 133,
  },
  image1: {
    position: 'absolute',
    width: 308,
    height: 266,
    top: screenHeight / 2 - 98,
  },
  image2: {
    position: 'absolute',
    width: 308,
    height: 266,
    top: screenHeight / 2 + 78,
    transform: [{ rotate: 167.03 }],
  },
  text: {
    fontFamily: 'Ibarra Real Nova',
    fontSize: 46,
    fontWeight: '700',
    lineHeight: 58,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'white',
  },
  loginButton: {
    position: 'absolute',
    width: 68,
    height: 14,
    top: screenHeight / 2 + 193,
    backgroundColor: '#707D7A',
    fontFamily: 'Ibarra Real Nova',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 22,
    color: '#FFFFFF',
    left: screenWidth / 2 - 34,
    padding: 10,
    borderRadius: 5,
 },

  signupButton: {
  position: 'absolute',
  width: 88,
  height: 14,
  top: screenHeight / 2 + 258,
  backgroundColor: '#109273',
  fontFamily: 'Ibarra Real Nova',
  fontSize: 17,
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
  left: screenWidth / 2 - 44,
  padding: 10,
  borderRadius: 5,
},
});

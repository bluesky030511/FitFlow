import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const SplashScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <Image
        source={require('../../assets/images/logo.png')} // Ensure this path is correct
        style={styles.logo}
        accessibilityLabel="App Logo" // Accessibility label for the logo
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('onboarding')} // Button press handler
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Allow absolute positioning within this container
  },
  logo: {
    position: 'absolute',
    top: 240, // Set logo position from the top
    width: 259, // Logo width
    height: 84, // Logo height
    alignSelf: 'center', // Center the image horizontally
  },
  button: {
    position: 'absolute',
    top: 561, // Set button position from the top
    height: 55, // Set button height
    width: 304, // Button width
    backgroundColor: '#354B5C', // Button background color
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    borderRadius: 15, // Optional: rounded corners
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 16, // Text font size
  },
});

export default SplashScreen;

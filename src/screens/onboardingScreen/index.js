import * as React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  useColorScheme,
  View,
} from 'react-native';

import CustomCarousel from '../../components/customCarousel';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const {height} = Dimensions.get('window');
const OnBoardingScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <Image
        source={require('../../assets/images/logo.png')} // Ensure this path is correct
        style={styles.logo}
        accessibilityLabel="App Logo" // Accessibility label for the logo
      />
      <CustomCarousel
        style={styles.carousel}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    gap:30
  },
  logo: {
    marginTop: 135,
    padding : 30,
    height: 84, // Logo height
    alignSelf: 'center', // Center the image horizontally
  },
  carousel: {
    height: height-220, // Set carousel height
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
});

export default OnBoardingScreen;

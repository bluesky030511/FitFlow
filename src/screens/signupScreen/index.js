import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Strings } from '../../constants/Strings';

const SignUpScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <Text style={styles.welcome}>{Strings.welcome}</Text>
      <Text style={styles.title}>{Strings.signup}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 49,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative', // Allow absolute positioning within this container
  },
  welcome: {
    fontSize: 24,
    fontWeight: '700',
    color: '#161616'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#161616'
  },
  inputGroup: {
    marginTop: 37
  },
  input: {
    marginBottom: 15,
    height: 50
  },
  agreeText: {
    fontSize: 10,
    color: '#8C8C8C'
  },
  button: {
    top: 561, // Set button position from the top
    height: 55, // Set button height
    width: 304, // Button width
    backgroundColor: '#354B5C', // Button background color
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    borderRadius: 15, // Optional: rounded corners
  },
});

export default SignUpScreen;

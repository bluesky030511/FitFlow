import React from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import OnboardingScreen from './src/screens/onboardingScreen'
import { View, Text } from 'react-native';

export const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator/>
    </View>
  );
};

export default App;

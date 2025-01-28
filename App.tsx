import React from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import { View, Text } from 'react-native';

export const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AuthNavigator/>
    </View>
  );
};

export default App;

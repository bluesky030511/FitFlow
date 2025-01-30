import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/signupScreen';
import VerificationScreen from '../screens/signupScreen/verification'

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        {/* You can add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
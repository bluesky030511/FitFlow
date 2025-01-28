import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-element-textinput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Strings } from '../../constants/Strings';

const SignUpScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  
  const handleCheckAction = () => setChecked(prev => !prev);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>{Strings.welcome}</Text>
      <Text style={styles.title}>{Strings.signup}</Text>
      
      <View style={styles.inputGroup}>
        {renderTextInput(Strings.firstName, "person")}
        {renderTextInput(Strings.lastname, "person")}
        {renderTextInput(Strings.email, "mark-email-unread")}
        {renderTextInput("Password", "lock", true)}
      </View>
      
      <CheckBox
        center
        title={Strings.agreeSignUpText}
        iconLeft
        checkedColor='#354B5C'
        containerStyle={styles.checkBoxStyle}
        onPress={handleCheckAction}
        checked={checked}
        size={30}
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('onboarding')} // Button press handler
      >
        <Text style={styles.buttonText}>{Strings.signup}</Text>
      </TouchableOpacity>
      
      <View style={styles.continueWith}>
        <Divider />
        <Text style={styles.continueWithText}>{Strings.continueWith}</Text>
        <Divider />
      </View>
      
      <View style={styles.loginBtnGroup}>
        {renderSocialButton(require('../../assets/images/google.jpg'))}
        {renderSocialButton(require('../../assets/images/facebook.png'))}
      </View>

      <TouchableOpacity 
        style={styles.loginPrompt} 
        // onPress={() => navigation.navigate('login')} // Navigate to the login screen
      >
        <Text style={styles.loginPromptText}>
          Already have an account? 
          <Text style={styles.loginLink}> Login</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  function renderTextInput(placeholder, iconName, isPassword = false) {
    return (
      <TextInput
        mode={isPassword ? "password" : undefined}
        style={styles.input}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholder={placeholder}
        placeholderTextColor="gray"
        renderLeftIcon={() => (
          <MaterialIcons name={iconName} style={styles.inputIconStyle} size={20} />
        )}
      />
    );
  }

  function renderSocialButton(imageSource) {
    return (
      <TouchableOpacity style={styles.login_btn}>
        <Image style={styles.btn_image} source={imageSource} />
      </TouchableOpacity>
    );
  }
};

const Divider = () => (
  <View style={styles.line} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 49,
    backgroundColor: '#FBFBFB',
  },
  welcome: {
    marginTop: 59,
    fontSize: 24,
    fontWeight: '700',
    color: '#161616',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#161616',
  },
  inputGroup: {
    marginTop: 37,
  },
  input: {
    marginBottom: 15,
    height: 50,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  inputStyle: { fontSize: 14 },
  labelStyle: { fontSize: 14, color: '#354B5C' },
  inputIconStyle: {
    paddingRight: 10,
    color: '#354B5C',
  },
  checkBoxStyle: {
    margin: 0,
    backgroundColor: '#FBFBFB',
  },
  button: {
    marginTop: 30,
    height: 55,
    backgroundColor: '#354B5C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  continueWith: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
    color: '#8C8C8C',
    fontSize: 10,
  },
  line: {
    height: 2,
    width: 34,
    backgroundColor: '#0B4DF8',
  },
  continueWithText: {
    color: '#8C8C8C',
    marginHorizontal: 10,
    fontSize: 12,
    textAlign: 'center',
  },
  btn_image: {
    width: 20,
    height: 20,
  },
  login_btn: {
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: '#354B5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnGroup: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginPrompt: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center', // Center the text horizontally
    padding: 10, // Optional: Add padding for better touch response area
  },
  loginPromptText: {
    fontSize: 14,
    color: '#7B7B7B',
  },
  loginLink: {
    color: '#0B4DF8',
    fontWeight: 'bold', // Make the login part bold
  },
});

export default SignUpScreen;

import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { styles } from '../Styles/MainStyle'; // Ensure this path is correct
import { API_BASE_URL } from '../utils/varConsts'; // Adjust if needed
import axios from 'axios';

const HomePageScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = async () => {
    if (!username || !password) {
      Alert.alert('Please enter both username and password');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
      if (response.status === 200) {
        navigation.navigate('ProfileScreen');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Something went wrong. Please try again');
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <ImageBackground
    source={require('../assets/ning.jpeg')}

      style={styles.background}
    >
      <p>Gr</p>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          
        </View>
        <View style={styles.card}>
        
          <TouchableOpacity style={styles.button1} onPress={handleLoginPress}>
            <Text style={styles.buttonText1}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={handleRegisterPress}>
            <Text style={styles.buttonText1}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomePageScreen;

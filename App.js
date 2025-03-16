import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


import HomePageScreen from './src/screens/HomePageScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LandingPage from './src/screens/LandingPage';


const Stack = createStackNavigator();




const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingPage"  
          screenOptions={{ headerShown: false }} 
        >
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  </SafeAreaProvider>

  );
};




export default App;


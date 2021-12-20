import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import Navigator from './navigation/Navigator';



const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  
  
  if (!fontsLoaded) return <AppLoading/>
  
  return (
      <Navigator />
  );
}

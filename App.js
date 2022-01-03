import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import Navigator from './navigation/Navigator';
import { Provider } from 'react-redux';
import store from './store';


const Stack = createStackNavigator();

import { init } from './db';

init()
.then(() => console.log("Db initialized"))
.catch((error)=> {
  console.log('Db fail connect:');
  console.log(error.message);
})



export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  
  
  if (!fontsLoaded) return <AppLoading/>
  
  return (
   
        <Provider store={store}>
           <Navigator />
        </Provider>
  
    
     
  );
}

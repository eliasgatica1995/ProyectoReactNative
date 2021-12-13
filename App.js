import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import ShopNavigator from './navigation/ShopNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
      <ShopNavigator />
  );
}

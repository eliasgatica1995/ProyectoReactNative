import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import CategoryScreen from '../screens/CategoryScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from "../screens/BreadDetailScreen";


const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home'}}/>
      <Stack.Screen name="CategoryScreen" component={CategoryScreen}/>
      <Stack.Screen name="CategoryBreadScreen" component={CategoryBreadScreen}/>
      <Stack.Screen name="BreadDetailScreen" component={BreadDetailScreen}/>
      
    </Stack.Navigator>
    </NavigationContainer>
);
export default ShopNavigator;
import React from 'react';
import {Platform} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './CartScreen';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    <Stack.Navigator  
    initialRouteName ="Cart"
    screenOptions={{
        headerTitleStyle:{
        fontWeight: 'bold' 
        }
    }}>

    <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{title:'Carrito'}} 
    />

    </Stack.Navigator>

}

export default CartNavigator
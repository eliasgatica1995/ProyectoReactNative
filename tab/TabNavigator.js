import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from '../navigation/Navigator';
import CartNavigator from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BottomTabs=createBottomTabNavigator();

const TabNavigator =()=>(
    <BottomTabs.Navigator initialRouteName="Shop">
        <BottomTabs.Screen
            name="ShopTab"
            component={ShopNavigator}
        />
        <BottomTabs.Screen
            name="CartTab"
            component={CartNavigator}
        />

    </BottomTabs.Navigator>
)
export default TabNavigator
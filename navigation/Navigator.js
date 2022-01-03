import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from '@expo/vector-icons';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from "../screens/BreadDetailScreen";
import CartScreen from "../screens/CartScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View,Text } from "react-native";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import { getLocation } from "../components/getLocation";



const Stack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const Tab= createBottomTabNavigator();
const LocationStack = createNativeStackNavigator();

export default function Navigator(){
function CartStackRender(){
  return (
    <CartStack.Navigator  screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
      backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle :{
        fontWeight: 'bold',
      },
    }}>
        <CartStack.Screen name={'Cart'} component={CartScreen}/>
    </CartStack.Navigator>
  )
}
function LocationStackRender(){
  return (
    <LocationStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
      backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle :{
        fontWeight: 'bold',
      },
    }}>
      <LocationStack.Screen name={'See Location'} component={getLocation}/>
    </LocationStack.Navigator>
  )
  
}
function ShopStackRender(){
        return <Stack.Navigator
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
                    <Stack.Screen name="Home" component={CategoryScreen} options={{ title: 'Perfect Market'}}/>
                    <Stack.Screen name="CategoryBreadScreen" options={({ route }) => ({ title: route.params?.name })} component={CategoryBreadScreen}/>
                    <Stack.Screen name="Detail" options={({ route }) => ({ title: route.params?.name })} component={BreadDetailScreen}/>
                    <Stack.Screen name="Direccion" options={({ route }) => ({ title: route.params?.name })} component={PlaceListScreen}/>
                    <Stack.Screen name="Probar Camara" options={({ route }) => ({ title: route.params?.name })} component={NewPlaceScreen}/>
                    

                 </Stack.Navigator>
}



return (
    <NavigationContainer>
       <Tab.Navigator screenOptions={{headerShown:false, tabBarShowLabel: false, tabBarStyle: style.tabBar}}>
            <Tab.Screen name={'Shop'} component={ShopStackRender} options={{tabBarIcon:({focused})=>(
              <View style={style.item}>
                  <Ionicons name={'md-home'} size={24} color={focused? 'black' : 'grey'}/>
                  <Text>Tienda</Text>
              </View>
          )}}/>
            <Tab.Screen name={'Carrito'} component={CartStackRender} options={{tabBarIcon:({focused})=>(
              <View style={style.item}>
                  <Ionicons name={'md-cart'} size={24} color={focused? 'black' : 'grey'}/>
                  <Text>Carrito</Text>
              </View>
          )}}/>
             <Tab.Screen name={'Location'} component={LocationStackRender} options={{tabBarIcon:({focused})=>(
              <View style={style.item}>
                  <Ionicons name={'md-home'} size={24} color={focused? 'red' : '#9A0A0A'}/>
                  <Text>Location</Text>
              </View>
          )}}/>

       </Tab.Navigator> 
    </NavigationContainer>
  )

  }
const style = StyleSheet.create({
    tabBar:{
      shadowColor: '#7f5df8',
      shadowOffset: {width:0,height:10},
      shadowOpacity: 0.25,
      shadowRadius : 0.25,
      elevation: 5,
      position: 'absolute',
      bottom: 5,
      left: 10,
      right: 10,
      borderRadius: 15,
      height:90,
      
    },
    item:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
    },
  



})
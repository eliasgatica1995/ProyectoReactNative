import { useNavigation } from '@react-navigation/core';
import React, { Component } from 'react';
import {Text,View,StyleSheet,Button, FlatList} from 'react-native';
import GridItem from './GridItem';
import {CATEGORIES} from '../data/categories'

export default function CategoryScreen(){
   navigation = useNavigation()
    
      return (
        <View style={styles.container}>
          <FlatList numColumns={2} data={CATEGORIES} renderItem={({item})=>{
               return <GridItem item={item} onSelected={()=>navigation.navigate('CategoryBreadScreen',{categoria:item.id,name:item.title})}/>
          }}/>         
        </View>
      );
    
  }
const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
    }
})

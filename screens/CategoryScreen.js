import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View,StyleSheet,FlatList} from 'react-native';
import GridItem from './GridItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../store/actions/CategoryAction';
 
export default function CategoryScreen(){
   const  categories = useSelector(state=>state.categories.categories)
   const dispatch = useDispatch()

   navigation = useNavigation()


   const handlerSelectedCategory=(item)=>{
        dispatch(selectCategory(item.id))
        navigation.navigate('CategoryBreadScreen',{name:item.title})
   }
    
      return (
        <View style={styles.container}>
          <FlatList numColumns={2} data={categories} renderItem={({item})=>{
               return <GridItem item={item} onSelected={()=>handlerSelectedCategory(item)}/>
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

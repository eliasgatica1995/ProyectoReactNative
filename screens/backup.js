import React, { Component } from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import {FlatList} from 'react-native'
import { productos } from '../data/products';
import BreadItem from '../components/BreadItem';

export default function CategoryBreadScreen({navigation,route}){
  const breads= productos.filter(producto=>producto.category ===route.params.categoryId);

  const handleSelected = (item) =>{
    navigation.navigate('Detail',{
      productId: item.id,
      name:item.name,
    })
  }
  const renderItem = ({item}) =>{
        <BreadItem item={item} onSelected={handleSelected}/>
  }
  return (
    <FlatList data={productos} keyExtractor= {item=item.id} renderItem={renderItem}/>
  )
}
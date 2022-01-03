import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View,StyleSheet,FlatList,Button,TouchableOpacity,Text} from 'react-native';
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
         
            <TouchableOpacity onPress={() => navigation.navigate('Probar Camara')} style={styles.appButtonContainer}>
                  <Text style={styles.texto}>CAMARA</Text>
             </TouchableOpacity>
          
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
    },
    boton:{
      padding: 20
    },
    appButtonContainer: {
      marginTop:10,
      backgroundColor: "#000",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 2,
      marginBottom: 10,
    },
    texto:{
      color:'white'
    },
})

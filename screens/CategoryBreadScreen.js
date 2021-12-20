
import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import BreadItem from '../components/BreadItem';
import { PRODUCTOS } from '../data/products';


export default function CategoryBreadScreen({navigation,route}){
    
  

    const breadFilter = PRODUCTOS.filter(value=>value.category===route.params?.categoria)


    const breadMap = () =>{
        return breadFilter.map((value,index)=>{
            return <BreadItem item={value} onSelected={()=>navigation.navigate('Detail',{item: value})} key={index}/>
        })
    }

    return (
        <View style={styles.container}>
        
            {breadMap()}
        </View>
      );
  }
  const styles = StyleSheet.create({
    container:
    { flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
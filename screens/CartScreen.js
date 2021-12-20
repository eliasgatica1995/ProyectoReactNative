import React from "react";
import {Text,View,StyleSheet,FlatList} from 'react-native'
import CartItem from "../components/CartItem";
import { PRODUCTOS } from "../data/products";



export default function CartScreen(){



    return (
        <View style={styles.container}>
            <FlatList data={PRODUCTOS} renderItem={({item})=>{ return <CartItem item={item}/>}
        }/>
        <View style={styles.confirm}>
            <Text style={styles.text}>Confirmar</Text>
            <Text style={styles.text}>Total: $12222</Text>
        </View>
        </View>
      )
  }
  const styles = StyleSheet.create({
    container:
    { flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100
    },
    confirm:{
        flexDirection: 'row',
        backgroundColor: '#d3d3d3',
        marginTop: 3,
        borderRadius:6,
        height: 20,
        width:200,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    text:{
        fontWeight: 'bold'
    }
  })
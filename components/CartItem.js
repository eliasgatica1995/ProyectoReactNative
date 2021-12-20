import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function CartItem({item}){
        return (
            <View style={styles.item}>
                <View style={styles.detail}>
                    <Text style={styles.header}>{item.title}</Text>
                </View>
            
                <Text style={styles.centrar}>Cantidad:{item.stock}</Text>
                <Text>Precio:{item.price}</Text>
                <Ionicons name={'trash'}size={24} color={'#d2d2d2'}/>
            </View>
    )
}
const styles =StyleSheet.create({
    item:{
        flex:1,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    header:{
        fontSize:18,
        alignItems: 'center',
        justifyContent: 'center',
       
        padding:15,
    },
    detail:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    text:{
        fontSize:16,
    },
    centrar:{
        alignItems: 'center',
        justifyContent: 'center'
    }
})
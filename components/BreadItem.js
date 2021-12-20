import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

const BreadItem = ({item,onSelected})=>{

    return (
        <TouchableOpacity onPress={()=>onSelected(item)}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View>
                    <Text style={styles.details}>{item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}
const styles= StyleSheet.create({
    breadItem:{
        padding:20,
        margin: 10,
        borderRadius:3,
        backgroundColor: '#ccc',
        width:340,
    },
    title:{
        fontSize:20,
    },
    details:{
        fontSize:18
    }
});
export default BreadItem
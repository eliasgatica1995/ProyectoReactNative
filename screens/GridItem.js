import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'


const GridItem = ({item,onSelected}) => {

    return (
        <View style={styles.gridItem}>
            <TouchableOpacity style={{...styles.container, backgroundColor:item.color}} onPress={()=>onSelected(item)}>

                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>


    )
}
const styles= StyleSheet.create({
    gridItem:{
       
        borderRadius:6,
        margin:15,
        height:150,
        width:150
    },
    container:{
        flex:1, 
        borderRadius:6,
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius:6,
        elevation:3,
        justifyContent: 'center',
        alignItems: 'center',
        padding:8,
    },
    title:{
        fontWeight : "bold",
    }
})
export default GridItem
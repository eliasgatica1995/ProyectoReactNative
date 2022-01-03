import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'


const AddrItem = ({addr}) => {

    return (
        <View style={styles.gridItem}>
                 <View>
                    <Text style={styles.title}>{addr}</Text>
                </View>     
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
export default AddrItem
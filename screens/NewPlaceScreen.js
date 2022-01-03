import React,{useState} from "react";
import {View,TextInput,ScrollView,StyleSheet,TouchableOpacity,Text } from 'react-native'

import ImageSelector from "../components/ImageSelector"


const NewPlaceScreen =()=> {

     const [imagen,setImagenPadre] = useState()
    
     const [title,setTitle] = useState('')

     const handleTitleChange = text => setTitle (text);

   
return (
    <ScrollView>
        <View style={styles.container}>
            <TextInput style={styles.input} value={title} onChangeText={handleTitleChange}></TextInput>
            <ImageSelector onImage={image =>setImagenPadre(image)}/>


            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.appButtonContainer}>
                        <Text style={styles.texto}>Go to Home</Text>
            </TouchableOpacity>


        </View>     
    </ScrollView>

)

}
const styles= StyleSheet.create({
    container:{
        flex:1,
        margin:30,

    },
    label:{
        fontSize:18,
        marginBottom:16
    },
    input:{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom:16,
        paddingHorizontal:2,
        paddingVertical:4,
    },
    containerBoton: {
        padding:10,
    },
    appButtonContainer: {
        backgroundColor: "#000",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 10,
      },
      texto:{
        color:'white',
        textAlign:'center'
      },
})
export default NewPlaceScreen
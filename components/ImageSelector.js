import React,{useState} from 'react'
import {View,Button,Image,Text,StyleSheet,Alert,TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permission from 'expo-permissions'

const ImageSelector = props => {
    const [pickedUri,setPickedUri] = useState()

    const veriryPermissions = async () =>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted'){
            Alert.alert('Permisos insuficientes', 'Necesita dar permisos de la camara para usar la aplicacion',[{text:'Ok'}])
            return false;
        }
        return true;
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await veriryPermissions();
        if (!isCameraOk) return ;
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect:[16,9],
            quality:0.8
        })
        setPickedUri(image.uri)
        props.onImage(image.uri)
    }


    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? <Text>No hay imagen seleccionada...</Text>
                 : (<Image style={styles.image} source={{uri : pickedUri}}/>)
                }
            </View>
           
            <TouchableOpacity onPress={handlerTakeImage} style={styles.appButtonContainer}>
                        <Text style={styles.texto}>Tomar foto</Text>
            </TouchableOpacity>
        </View>
    )   
}
const styles = StyleSheet.create({
    container:{
        marginBottom:10,
    },
    preview:{
        width:'100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems:'center',
        borderColor: 'black',
        borderWidth:1,
    },
    image:{
        width:'100%',
        height: '100%'
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
export default ImageSelector
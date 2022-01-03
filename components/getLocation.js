import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert} from 'react-native';
import * as Location from 'expo-location';

import { fetchAddresses, insertAddress} from '../db';

export const getLocation = () => {

    const [location, setLocation] = useState(null);
    const [street, setStreet] = useState(null);
    const [streetsSaved, setStreetsSaved] = useState([])

    const getPermissionsLocation = async() => {
        const permission = await Location.requestForegroundPermissionsAsync();

        if (permission.status !== 'granted'){
            console.log(permission);
            return false
        }
        return true
    }
  
    const handleGetLocation = async () => {
        const isLocationOk = await getPermissionsLocation();
    
        if (!isLocationOk) return;

        const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
        })
      
        setLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
    }

  
    const saveLocation = async () => {
        const response = await insertAddress(street.label, location.lat, location.lng);
       
    }

    useEffect(()=> { 
        ( async()=> {
            const response = await fetchAddresses ()
            setStreetsSaved (response.rows._array)
        })()

    }, [])

    console.log(streetsSaved);

    const convertirLocation = async () => {
        const KEY_POSITION_STACK='32ffc23fc773c795dde3453c8ceeac6d'
        const response = await fetch(`http://api.positionstack.com/v1/reverse?access_key=${KEY_POSITION_STACK}&query=${location.lat},${location.lng}`);
        const data = await response.json();
        setStreet(data.data[0])
    }

    return (        
        <View style={styles.preview}>
           
            {!location ?
            <TouchableOpacity onPress={()=> handleGetLocation()} style={styles.appButtonContainer}>
                <Text style={styles.texto}>Obtener Ubicacion</Text>
            </TouchableOpacity>
            : <>
            <View  style={styles.container}>
                <Text style={styles.textoBold}> Latitud: {location.lat}, Longitud: {location.lng} </Text>
            </View>
           
            <TouchableOpacity onPress={()=> convertirLocation()} style={styles.appButtonContainer}>
                <Text style={styles.texto}>Ver calle</Text>
            </TouchableOpacity>

            {street&&
                <>
                    <Text>{street.label}</Text>
                    <TouchableOpacity onPress={()=> saveLocation()} style={styles.appButtonContainer}>
                        <Text style={styles.texto}>Guardar en SQLite</Text>
                    </TouchableOpacity>
                </>
            }  
            </>
            }
         
        </View> 
    )
}

const styles = StyleSheet.create({
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    container:{
        
        flex:1, 
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius:6,
        elevation:8,
        justifyContent: 'center',
        alignItems: 'center',
        padding:8,
        elevation: 8,
        
    },
    imagen: {
        width: '100%',
        height: '100%',
    },
    appButtonContainer: {
        backgroundColor: "#000",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 2,
        marginBottom: 10,
      },
      texto:{
        color:'white'
      },
      textoBold:{
        fontWeight: 'bold'
      }
})

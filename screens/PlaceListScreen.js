import React from "react";
import { FlatList,Button,View } from "react-native";
import { useSelector } from "react-redux";

const PlaceListScreen = ({navigation}) =>{
    const places = useSelector(state=>state.places);
   

    return (

        <View>
            <Button
            color={'black'}
            title="Agregar Direccion"
            onPress={() => navigation.navigate('Agregar Direccion')}
            />

             <FlatList data={places} keyExtractor={item=>item.id} renderItem={renderItem}/>
        </View>
    )
}
export default PlaceListScreen
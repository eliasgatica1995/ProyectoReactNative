import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import {Image} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addItem} from '../store/actions/CartAction';


export default function BreadDetailScreen ({navigation,route}) {

   const item = useSelector(state=>state.items.selected)
   const dispatch = useDispatch()

   const handlerAddItemCart = ()=>dispatch(addItem(item))
   
      return (
        <View style={style.container}>
          <Text style={style.title}>{item.title}</Text>
          <View style={style.containerImg}>
            <Image style={style.imagen} source={{uri: item.image}}/>
          </View>
          
          <Text style={style.description}>{item.description}</Text>
          <Text style={style.price}>${item.price}</Text>
          <Button title={'Agregar al carrito'} onPress={handlerAddItemCart}> </Button>     

         
         
        </View>
      );
    
  }

const style=StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    shadowColor: 'black',
    shadowOffset: {width:0,height:2},
    shadowRadius:6,
    shadowOpacity: 0.25,
    elevation:5,
    borderRadius:10,
    backgroundColor: 'white',
    marginHorizontal:10,
    top:5,
    marginBottom:110,
    padding:10
  },
  title:{
    marginTop:10,
    fontSize:20,
    fontWeight:'bold',
    textAlign: 'center'
  },
  price:{
    fontFamily: 'Inter_900Black',
    fontSize:40,
    fontWeight:'bold',
    textAlign: 'center'
  },
  imagen:{
    width: '100%', 
    height: '100%',
    borderRadius:6
  },
  description:{
    padding:10,
    textAlign: 'justify'
  },
  card:{
    shadowColor: 'black',
    shadowOffset: {width:0,height:2},
    shadowRadius:6,
    shadowOpacity: 0.25,
    elevation:5,
    borderRadius:10,
    backgroundColor: 'white',
    marginVertical:20,
  },
  containerImg:{
    width: '40%', 
    height: '40%',
  }
})

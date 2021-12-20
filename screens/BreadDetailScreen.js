import React, { Component } from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import GridItem from './GridItem';
import {Image} from 'react-native'
export default function BreadDetailScreen ({navigation,route}) {
   const prod = route.params?.item
      return (
        <View style={style.container}>
          <Text style={style.title}>{prod.title}</Text>
          <View style={style.containerImg}>
            <Image style={style.imagen} source={{uri: prod.image}}/>
          </View>
          
          <Text style={style.description}>{prod.description}</Text>
          <Text style={style.price}>${prod.price}</Text>       

         
         
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

import React from "react";
import {Text,View,StyleSheet,FlatList, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { confirmCart} from "../store/actions/CartAction";

export default function CartScreen(){
    const dispatch = useDispatch()
    const cart = useSelector(state =>state.cart.items)
    const total = useSelector(state =>state.cart.total)
    
    const handlerCart = () => dispatch(confirmCart(cart,total))
    return (
        <View style={styles.container}>
            <FlatList data={cart} renderItem={({item})=>{ return <CartItem item={item}/>}
        }/>
            <View style={styles.confirm}>
               
                <TouchableOpacity onPress={handlerCart} style={styles.appButtonContainer}>
                    <Text style={styles.text}>Confirmar</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Total: ${total}</Text>
            </View>
        </View>
      )
  }
  const styles = StyleSheet.create({
    container:
    { flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100
    },
    confirm:{
        flexDirection: 'row',
        backgroundColor: '#d3d3d3',
        marginTop: 3,
        borderRadius:6,
        height: 40,
        width:400,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    text:{
        fontWeight: 'bold',
        marginLeft:10,
        marginRight:10,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
  })
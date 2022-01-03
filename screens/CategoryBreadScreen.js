
import React, { useEffect } from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BreadItem from '../components/BreadItem';
import { PRODUCTOS } from '../data/products';
import { filteredItem, selectItem } from '../store/actions/ItemAction';



export default function CategoryBreadScreen({navigation,route}){
    

    const dispatch =useDispatch();
    const breadFilter = useSelector(state=>state.items.filteredItems)
    const category = useSelector(state=>state.categories.selected)

    useEffect(() => {
      dispatch(filteredItem(category.id))
    }, [])

    const handlerSelectedItem = (value) =>{
      dispatch(selectItem(value.id))
      navigation.navigate('Detail')
    }





    const breadMap = () =>{
        return breadFilter.map((value,index)=>{
            return <BreadItem item={value} onSelected={()=>handlerSelectedItem(value)} key={index}/>
        })
    }

    return (
        <View style={styles.container}>
        
            {breadMap()}

        </View>
      );
  }
  const styles = StyleSheet.create({
    container:
    { flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
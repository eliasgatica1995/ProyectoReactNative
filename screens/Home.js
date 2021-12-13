// screens/Home.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
class Home extends Component {
  render() {
    return (
        <View style={styles.head}>
          <Text style={styles.titulo}>Home Screen</Text>
          <Button
            title="Ir a CategoryScreen"
            onPress={() => this.props.navigation.navigate('CategoryScreen')}
          />
           <Button
            title="Ir a CategoryBreadScreen"
            onPress={() => this.props.navigation.navigate('CategoryBreadScreen')}
          />
          <Button
            title="Ir a BreadDetail"
            onPress={() => this.props.navigation.navigate('BreadDetailScreen')}
          />
         
          
        </View>
      );
  }
}

const styles = StyleSheet.create({
    head:{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    titulo:{
        fontWeight: 'bold'
    }
})

export default Home;
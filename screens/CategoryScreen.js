import React, { Component } from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

class CategoryScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>CATEGORY SCREEN</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
         
        </View>
      );
    }
  }

export default CategoryScreen
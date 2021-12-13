import React, { Component } from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

class BreadDetailScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>BREAD DETAIL SCREEN</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
         
        </View>
      );
    }
  }

export default BreadDetailScreen
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Button extends Component {
  render() {
    return (
      <View
        style={{
          height: 37,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:"#e3e3e3",
          borderRadius: 5
        }}>
        <Text style={{color:"black", fontWeight:"500"}}>This is a button</Text>
      </View>
    );
  }
}

export default Button;

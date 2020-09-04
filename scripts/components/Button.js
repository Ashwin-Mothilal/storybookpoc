import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';

class Button extends Component {
  render() {
    return (
      <Pressable
        onPress={() => {
          alert('Tset');
        }}
        style={{
          height: 37,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e3e3e3',
          borderRadius: 5,
        }}>
        <Text style={{color: 'black', fontWeight: '500'}}>
          This is a button
        </Text>
      </Pressable>
    );
  }
}

export default Button;

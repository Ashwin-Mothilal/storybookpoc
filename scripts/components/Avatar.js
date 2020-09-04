import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Avatar extends Component {
  render() {
    return (
      <Image
        source={{
          uri:
            'https://webneel.com/daily/sites/default/files/images/daily/05-2018/portrait-photography-by-dennis-drozhzhin.jpg',
        }}
        style={{height: 150, width: 150, borderRadius:75}}
      />
    );
  }
}

export default Avatar;

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, SECONDARY_COLOR} from '../Themes/light';

const Avatar = ({uri}) => (
  <View style={AvatarStyles.container}>
    <Image
      source={{
        uri: uri,
      }}
      style={AvatarStyles.image}
    />
  </View>
);

const AvatarStyles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    borderWidth: 4,
    borderColor: BACKGROUND_COLOR,
  },
  container: {
    shadowOpacity: 1,
    shadowColor: SECONDARY_COLOR,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 15,
    elevation: 5,
  },
});

export default Avatar;

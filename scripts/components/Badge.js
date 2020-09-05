import React from 'react';
import propTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import {PRIMARY_COLOR, TEXT_COLOR} from '../Themes/light';

const Badge = ({text, size}) => {
  return (
    <View
      style={[
        {
          height: size,
          width: size,
          borderRadius: size / 2,
        },
        BadgeStyles.container,
      ]}>
      <Text style={[{color: TEXT_COLOR}, BadgeStyles.textStyles]}>{text}</Text>
    </View>
  );
};

Badge.propTypes = {
  text: propTypes.string,
  size: propTypes.number,
};

Badge.defaultProps = {text: '', size: 20};

const BadgeStyles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 10,
  },
});

export default Badge;

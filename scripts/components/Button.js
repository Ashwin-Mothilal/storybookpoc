import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR} from '../Themes/light';
import propTypes from 'prop-types';

const BUTTON_TYPES = {
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
};

const Button = ({type, text, onPress}) => {
  return (
    <RectButton
      onPress={onPress}
      style={[
        ButtonStyles.container,
        type === BUTTON_TYPES.PRIMARY
          ? {backgroundColor: PRIMARY_COLOR}
          : {backgroundColor: SECONDARY_COLOR},
      ]}>
      <Text style={ButtonStyles.textStyles}>{text}</Text>
    </RectButton>
  );
};

Button.propTypes = {
  type: propTypes.string,
  text: propTypes.string,
  onPress: propTypes.func,
};

Button.defaultProps = {
  type: BUTTON_TYPES.PRIMARY,
  text: "I'm a Button",
};

const ButtonStyles = StyleSheet.create({
  container: {
    height: 37,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textStyles: {
    color: TEXT_COLOR,
    fontWeight: '500',
  },
});

export default Button;
export {BUTTON_TYPES};

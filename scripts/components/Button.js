import propTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {
  DANGER,
  GREY,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SUCCESS,
  TEXT_COLOR,
  WARNING,
} from '../Themes/light';

const BUTTON_TYPES = {
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
  DANGER: 'Danger',
  WARNING: 'Warning',
  SUCCESS: 'Success',
  DEFAULT: 'Default',
};

const getButtonBackgroundColorFromType = (type) => {
  let backgroundColor = GREY;
  switch (type) {
    case BUTTON_TYPES.PRIMARY:
      backgroundColor = PRIMARY_COLOR;
      break;
    case BUTTON_TYPES.SECONDARY:
      backgroundColor = SECONDARY_COLOR;
      break;
    case BUTTON_TYPES.DANGER:
      backgroundColor = DANGER;
      break;
    case BUTTON_TYPES.WARNING:
      backgroundColor = WARNING;
      break;
    case BUTTON_TYPES.SUCCESS:
      backgroundColor = SUCCESS;
      break;
  }
  return backgroundColor;
};

const Button = ({type, text, onPress}) => {
  return (
    <RectButton
      onPress={onPress}
      style={[
        ButtonStyles.container,
        {backgroundColor: getButtonBackgroundColorFromType(type)},
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

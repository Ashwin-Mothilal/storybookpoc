import propTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import {HEADING_COLOR} from '../Themes/light';

const Heading = ({text}) => {
  return <RNText style={HeadingStyles.text}>{text}</RNText>;
};

Heading.propTypes = {text: propTypes.string};

Heading.defaultProps = {text: ''};

const HeadingStyles = StyleSheet.create({
  text: {fontSize: 27, color: HEADING_COLOR, fontWeight: 'bold'},
});

export default Heading;

import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Button from '../components/Button';

import {View} from 'react-native';

const buttonStories = storiesOf('Buttons', module);

buttonStories.add('Default', () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button />
  </View>
));

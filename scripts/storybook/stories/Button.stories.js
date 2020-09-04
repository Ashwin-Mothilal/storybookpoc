import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Button, {BUTTON_TYPES} from '../../components/Button';

import {View} from 'react-native';

const buttonStories = storiesOf('Buttons', module);

buttonStories.add(BUTTON_TYPES.PRIMARY, () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button />
  </View>
));

buttonStories.add(BUTTON_TYPES.SECONDARY, () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button type={BUTTON_TYPES.SECONDARY} />
  </View>
));

import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Button, {BUTTON_TYPES} from '../../components/Button';

import {View} from 'react-native';

const buttonStories = storiesOf('Buttons', module);

buttonStories.add(BUTTON_TYPES.DEFAULT, () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button type={BUTTON_TYPES.DEFAULT} />
  </View>
));

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

buttonStories.add(BUTTON_TYPES.DANGER, () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button type={BUTTON_TYPES.DANGER} />
  </View>
));

buttonStories.add(BUTTON_TYPES.SUCCESS, () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button type={BUTTON_TYPES.SUCCESS} />
  </View>
));

buttonStories.add(BUTTON_TYPES.WARNING, () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button type={BUTTON_TYPES.WARNING} />
  </View>
));

import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import Badge from '../../components/Badge';

const BadgeStories = storiesOf('Badge', module);

BadgeStories.add('Default', () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Badge text="10" />
  </View>
));

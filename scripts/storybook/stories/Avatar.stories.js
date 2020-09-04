import React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import Avatar from '../../components/Avatar.js';

const AvatarStories = storiesOf('Avatar', module);

AvatarStories.add('Default', () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Avatar
      uri={
        'https://webneel.com/daily/sites/default/files/images/daily/05-2018/portrait-photography-by-dennis-drozhzhin.jpg'
      }
    />
  </View>
));

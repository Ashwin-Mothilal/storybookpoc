import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import Heading from '../../components/Heading';

const HeadingStories = storiesOf('Heading', module);

HeadingStories.add('Default', () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Heading text="This is a Heading" />
  </View>
));

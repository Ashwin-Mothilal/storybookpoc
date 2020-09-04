import {configure, getStorybookUI} from '@storybook/react-native';

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: false,
});

export default StorybookUIRoot;

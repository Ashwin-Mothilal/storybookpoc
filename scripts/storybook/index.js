import {configure, getStorybookUI} from '@storybook/react-native';
import './rn-addons';

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: false,
});

export default StorybookUIRoot;

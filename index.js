/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/
import {getStorybookUI, configure} from '@storybook/react-native';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';

configure(() => {
  require('./scripts/stories/stories'); // we will create this file in the next steps
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import DirectionLayout from './src/component/DirectionLayout';
import {Quiz} from './app/screens/index';
import ModalTest from './app/screens/ModalTest';

AppRegistry.registerComponent(appName, () => App);

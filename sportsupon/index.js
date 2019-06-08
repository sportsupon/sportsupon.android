/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Client } from 'bugsnag-react-native'
// import {ApiConstant} from 'library/constants/apiconst'
// const bugsnag = new Client(ApiConstant.BUG_SNAG)

AppRegistry.registerComponent(appName, () => App);

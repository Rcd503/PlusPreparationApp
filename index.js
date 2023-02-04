/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppMain from './App';
import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';
// Register background handler and quite app
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background! and quite app', remoteMessage);
// });


AppRegistry.registerComponent(appName, () => AppMain);

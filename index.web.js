/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Platform
} from 'react-native';

import ysweb from './src/containers/ysweb'

AppRegistry.registerComponent('ysweb', () => ysweb);
if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('ysweb', {
    rootTag: app
  });
}

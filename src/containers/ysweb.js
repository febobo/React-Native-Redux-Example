import React, { Component } from 'react-native';
import { createStore , applyMiddleware , combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers/Index';
import ReduxApp from './ReduxApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class Index extends Component {
  render (){
    return (
      <Provider store={store}>
        <ReduxApp />
      </Provider>
    )
  }
}

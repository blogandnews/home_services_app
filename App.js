/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux';
import Route from './route';

const App: () => Node = () => {

  return (
    <Provider store={store}>
       <Route />
    </Provider>
  );
};

export default App;

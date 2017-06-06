import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
      </Provider>
    );
  }
}

export default App;
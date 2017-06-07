import React from "react";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import routes from "Routes";
import configureStore from "store/configureStore";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router routes={routes} history={browserHistory}/>
    </MuiThemeProvider>
  </Provider>
);

export default App;
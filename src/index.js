import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import registerServiceWorker from "registerServiceWorker";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import "style.css";

import App from "App";

// Regarding https://github.com/callemall/material-ui/issues/1011
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

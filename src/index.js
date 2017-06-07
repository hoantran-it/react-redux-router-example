import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from 'App';
import registerServiceWorker from 'registerServiceWorker';
import 'style.css';

// Regarding https://github.com/callemall/material-ui/issues/1011
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

import React from "react";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import {IntlProvider, addLocaleData} from "react-intl";
// eslint-disable-next-line
import intl from "intl"; // Fix Safari brower problem
import en from "react-intl/locale-data/en";
import vi from "react-intl/locale-data/vi";
import routes from "routes";
import configureStore from "store/configureStore";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import localeEn from "i18n/en.json";
import localeVi from "i18n/vi.json";

let localeData = {
  en: localeEn,
  vi: localeVi
};

addLocaleData([...en, ...vi]);

const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <MuiThemeProvider>
        <Router routes={routes} history={browserHistory}/>
      </MuiThemeProvider>
    </IntlProvider>
  </Provider>
);

export default App;
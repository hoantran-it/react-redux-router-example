import React from "react";
import intl from "intl";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import {IntlProvider, addLocaleData} from "react-intl";
import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";
import vi from "react-intl/locale-data/vi";
import routes from "routes";
import configureStore from "store/configureStore";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import localeEn from "locales/en.json";
import localeFr from "locales/fr.json";
import localeVi from "locales/vi.json";

let localeData = {
  en: localeEn,
  fr: localeFr,
  vi: localeVi
};

addLocaleData([...en, ...fr, ...vi]);

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
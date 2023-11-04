import React from 'react';
import ReactDOM from 'react-dom/client';
import "@patternfly/react-core/dist/styles/base.css";

import './index.css';
import App from './App';

// translations
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// the translations are small, just include them here (otherwise we would have
// to use i18next-http-backend plugin)
import cs from "./i18n/cs.json";

// detect the default language from browser or cookies
// see https://github.com/i18next/i18next-browser-languageDetector
i18next.use(LanguageDetector).init({
  // React already does escaping
  interpolation: { escapeValue: false },
  // https://www.i18next.com/principles/fallback#key-fallback
  // allow keys to be phrases having `:`, `.`
  nsSeparator: false,
  keySeparator: false,
  // do not load a fallback
  fallbackLng: false,
  // allow an empty value to count as invalid (by default is true)
  returnEmptyString: false,
  resources: {
    cs: {
      texts: cs
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

import React, { useState } from "react";
import ResinCalculator from "./components/ResinCalculator";
import { Page, Masthead, PageSection, MastheadContent, Text, TextContent, TextVariants } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";

import "./App.css";
import Footer from "./components/Footer";
import LangSwitcher from "./components/LangSwitcher";

function App() {
  const { t, i18n } = useTranslation("texts");
  const [lang, setLang] = useState(i18n.language);

  // translate also the page title
  document.title = t("Resin Calculator");

  const langChanged = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  const header = <Masthead inset={{ default: "insetXs" }}>
    <MastheadContent style={ {justifyContent: "space-between"} }>
      <TextContent>
        <Text component={TextVariants.h1}>{t("Resin Calculator")}</Text>
      </TextContent>
      <LangSwitcher onChange={langChanged}/>
    </MastheadContent>
  </Masthead>;

  return <Page header={header}>
    <PageSection isFilled hasShadowBottom>
      <ResinCalculator lang={lang}/>
    </PageSection>
    <PageSection isFilled={false} variant="light">
      <Footer />
    </PageSection>
  </Page>;
};

export default App;

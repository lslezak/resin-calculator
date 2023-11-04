import React from "react";
import ResinCalculator from "./components/ResinCalculator";
import { Page, Masthead, PageSection, MastheadContent, Text, TextContent, TextVariants } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";

import "./App.css";
import Footer from "./components/Footer";
import LangButtons from "./components/LangButtons";

function App() {
  const { t } = useTranslation("texts");

  // translate also the page title
  document.title = t("Resin Calculator");

  const header = <Masthead inset={{ default: "insetXs" }}>
    <MastheadContent style={ {justifyContent: "space-between"} }>
      <TextContent>
        <Text component={TextVariants.h1}>{t("Resin Calculator")}</Text>
      </TextContent>
      <LangButtons />
    </MastheadContent>
  </Masthead>;

  return <Page header={header}>
    <PageSection isFilled hasShadowBottom>
      <ResinCalculator />
    </PageSection>
    <PageSection isFilled={false} variant="light">
      <Footer />
    </PageSection>
  </Page>;
};

export default App;

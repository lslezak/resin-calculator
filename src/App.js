import React from "react";
import ResinCalculator from "./components/ResinCalculator";
import { Page, Masthead, MastheadMain, MastheadBrand, PageSection } from "@patternfly/react-core";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const header = <Masthead inset={{ default: "insetXs" }}>
    <MastheadMain>
      <MastheadBrand>
        Resin Calculator
      </MastheadBrand>
    </MastheadMain>
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

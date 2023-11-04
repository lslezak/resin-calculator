
import React from "react";
import { Button } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";

import i18next from "i18next";

import "./LangButton.css";

export default function LangButtons() {
  const { i18n } = useTranslation("texts");

  return (
    <div>
      <Button
        isInline
        variant="link"
        className={i18next.language === "en" && "activeLanguage"}
        onClick={() => i18n.changeLanguage("en")}
      >
        English
      </Button>
      {" / "}
      <Button
        isInline
        variant="link"
        className={i18next.language === "cs" && "activeLanguage"}
        onClick={() => i18n.changeLanguage("cs")}
      >
        Čeština
      </Button>
    </div>
  );
}

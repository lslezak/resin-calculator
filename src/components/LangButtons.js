
import React from "react";
import { Button } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";

import i18next from "i18next";

import "./LangButton.css";

export default function LangButtons({ changeCB }) {
  const { i18n } = useTranslation("texts");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    changeCB(lang);
  };

  return (
    <div>
      <Button
        isInline
        variant="link"
        className={i18next.language === "en" && "activeLanguage"}
        onClick={() => changeLanguage("en")}
      >
        English
      </Button>
      {" / "}
      <Button
        isInline
        variant="link"
        className={i18next.language === "cs" && "activeLanguage"}
        onClick={() => changeLanguage("cs")}
      >
        Čeština
      </Button>
    </div>
  );
}

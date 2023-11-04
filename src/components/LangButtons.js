
import React from "react";
import { Button } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";

export default function LangButtons() {
  const { i18n } = useTranslation("texts");

  return (
    <div>
      <Button
        isInline
        variant="link"
        onClick={() => i18n.changeLanguage("en")}
      >
        English
      </Button>
      {" / "}
      <Button
        isInline
        variant="link"
        onClick={() => i18n.changeLanguage("cs")}
      >
        Čeština
      </Button>
    </div>
  );
}

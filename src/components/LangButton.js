
import React from "react";
import { Button } from "@patternfly/react-core";

import i18next from "i18next";

import "./LangButton.css";

export default function LangButton({ lang, label, onChange }) {
  return <Button
    isInline
    variant="link"
    className={i18next.language === lang && "activeLanguage"}
    onClick={() => onChange(lang)}
  >
    {label}
  </Button>
}

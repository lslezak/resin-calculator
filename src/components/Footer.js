
import React from "react";
import pkg from "../../package.json";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("texts");

  return <div>{t("Version {{version}}", {version: pkg.version})}</div>
}

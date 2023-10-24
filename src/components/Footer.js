
import React from "react";
import pkg from "../../package.json";
import i18next from "i18next";

export default function Footer() {
  return <div>{i18next.t("Version {{version}}", {version: pkg.version})}</div>
}
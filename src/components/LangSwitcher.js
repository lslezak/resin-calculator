
import React from "react";
import LangButton from "./LangButton";

export default function LangSwitcher({ onChange }) {
  return (
    <div>
      <LangButton lang="en" label="English" onChange={onChange}/>
      {" / "}
      <LangButton lang="cs" label="Čeština" onChange={onChange}/>
    </div>
  );
}

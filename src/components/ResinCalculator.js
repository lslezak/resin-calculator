import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  Bullseye,
} from '@patternfly/react-core';

import { useTranslation } from "react-i18next";
import ValidationError from "./ValidationError";
import calculateResin from "../lib/calculateResin";

const ResinCalculator = ({ lang }) => {
  const [total, setTotal] = useState();
  const [ratio, setRatio] = useState("100:30");
  const { t } = useTranslation("texts");

  const handleTotalChange = (_event, value) => {
    setTotal(value);
  };

  const handleRatioChange = (_event, value) => {
    setRatio(value.trim());
  };

  const [A, B, totalValid, ratioValid] = calculateResin(total, ratio);

  const ratioError = !ratioValid && <ValidationError>
    {t("Enter two numbers separated by semicolon (:)")}
  </ValidationError>;

  const totalError = (!totalValid && total !== undefined) && <ValidationError>
    {t("Enter a number greater than zero")}
  </ValidationError>;

  return (
    <Bullseye>
      <Form>
        <p style={{ maxWidth: "40ch" }}>
          {t("Simple calculator for computing amount of resin components A and B according to the specified mixing ratio.")}
        </p>
        <FormGroup label={t("Mixing Ratio (Resin A : Resin B)")} fieldId="ratio">
          <TextInput
            id="ratio"
            value={ratio}
            onChange={handleRatioChange}
          />
          {ratioError}
        </FormGroup>
        <FormGroup label={t("Total Amount (Resin A + Resin B)")} fieldId="total">
          <TextInput
            type="number"
            id="total"
            min="1"
            value={total || ""}
            onChange={handleTotalChange}
          />
          {totalError}
        </FormGroup>

        <FormGroup>
          <FormGroup label={t("Resin A")} fieldId="resinA">
            <TextInput
              id="resinA"
              value={A.toLocaleString(lang, { maximumFractionDigits: 1 })}
              isDisabled
            />
          </FormGroup>
          <FormGroup label={t("Resin B")} fieldId="resinB">
            <TextInput
              id="resinB"
              value={B.toLocaleString(lang, { maximumFractionDigits: 1 })}
              isDisabled
            />
          </FormGroup>
        </FormGroup>
      </Form>
    </Bullseye>
  );
};

export default ResinCalculator;

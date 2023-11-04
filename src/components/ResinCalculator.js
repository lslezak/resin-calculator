import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  FormHelperText,
  HelperText,
  HelperTextItem,
  TextInput,
  Bullseye,
} from '@patternfly/react-core';

import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import { useTranslation } from "react-i18next";

function parseRatio(ratio) {
  const [ratAstr, ratBstr] = ratio.split(":");
  return [Number(ratAstr), Number(ratBstr)];
}

const ResinCalculator = () => {
  const [total, setTotal] = useState("");
  const [ratio, setRatio] = useState("100:30");
  const [ratioValidated, setRatioValidated] = useState("success");
  const [totalValidated, setTotalValidated] = useState("success");
  const [resinA, setResinA] = useState(0);
  const [resinB, setResinB] = useState(0);
  const { t } = useTranslation("texts");

  const handleTotalChange = (_event, value) => {
    setTotal(value);

    if (value > 0) {
      setTotalValidated("success");

      if (ratioValidated === "success") {
        calculateResin(value, ratio);
      }
    } else {
      setTotalValidated("error");
      setResinA(0);
      setResinB(0);
    }
  };

  const handleRatioChange = (_event, value) => {
    const newRatio = value.trim();
    setRatio(newRatio);

    if (/^[1-9][0-9]*:[1-9][0-9]*$/.test(newRatio)) {
      setRatioValidated("success");

      if (totalValidated === "success") {
        calculateResin(total, value);
      }
    } else {
      setRatioValidated("error");
      setResinA(0);
      setResinB(0);
    }
  };

  const calculateResin = (total, ratStr) => {
    const [ratA, ratB] = parseRatio(ratStr);
    const ratio = ratA / ratB;

    const resinB = total / (1 + ratio);
    const resinA = resinB * ratio;
    setResinA(resinA.toLocaleString(undefined, {maximumFractionDigits: 1}));
    setResinB(resinB.toLocaleString(undefined, {maximumFractionDigits: 1}));
  };

  return (
    <Bullseye>
      <Form>
        <p style={{maxWidth: "40ch"}}>
          {t("Simple calculator for computing amount of resin components A and B according to the specified mixing ratio.")}
        </p>
        <FormGroup label={t("Mixing Ratio (Resin A : Resin B)")} fieldId="ratio">
          <TextInput
            id="ratio"
            value={ratio}
            onChange={handleRatioChange}
          />
          {ratioValidated === "error" && <FormHelperText>
            <HelperText>
              <HelperTextItem icon={<ExclamationCircleIcon />} variant={ratioValidated}>
              {t("Enter two numbers separated by semicolon (:)")}
              </HelperTextItem>
            </HelperText>
          </FormHelperText>}
        </FormGroup>
        <FormGroup label={t("Total Amount (Resin A + Resin B)")} fieldId="total">
          <TextInput
            type="number"
            id="total"
            min="1"
            value={total}
            onChange={handleTotalChange}
          />
          {totalValidated === "error" && <FormHelperText>
            <HelperText>
              <HelperTextItem icon={<ExclamationCircleIcon />} variant={totalValidated}>
                {total !== "" && total <= 0 && t("Enter a number greater than zero") }
                {total === "" && t("Enter a number") }
              </HelperTextItem>
            </HelperText>
          </FormHelperText>}
        </FormGroup>

        <FormGroup>
          <FormGroup label={t("Resin A")} fieldId="resinA">
            <TextInput
              id="resinA"
              value={resinA}
              isDisabled
            />
          </FormGroup>
          <FormGroup label={t("Resin B")} fieldId="resinB">
            <TextInput
              id="resinB"
              value={resinB}
              isDisabled
            />
          </FormGroup>
        </FormGroup>
      </Form>
    </Bullseye>
  );
};

export default ResinCalculator;

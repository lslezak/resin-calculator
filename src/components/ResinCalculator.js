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

const calculateResin = (total, ratStr) => {
  const totalValid = total > 0;
  const ratioValid = /^[1-9][0-9]*:[1-9][0-9]*$/.test(ratStr);

  if (!totalValid || !ratioValid)
    return [0, 0, totalValid, ratioValid];

  const [ratA, ratB] = parseRatio(ratStr);
  const ratio = ratA / ratB;

  const B = total / (1 + ratio);
  const A = B * ratio;

  return [A, B, true, true];
}

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

  const ratioError = !ratioValid && <FormHelperText>
    <HelperText>
      <HelperTextItem icon={<ExclamationCircleIcon />} variant="error">
        {t("Enter two numbers separated by semicolon (:)")}
      </HelperTextItem>
    </HelperText>
  </FormHelperText>;

  const totalError = (!totalValid && total !== undefined) && <FormHelperText>
    <HelperText>
      <HelperTextItem icon={<ExclamationCircleIcon />} variant="error">
        {t("Enter a number greater than zero")}
      </HelperTextItem>
    </HelperText>
  </FormHelperText>;

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

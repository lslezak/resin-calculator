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
        <FormGroup label="Mixing Ratio (Resin A : Resin B)" fieldId="ratio">
          <TextInput
            id="ratio"
            value={ratio}
            onChange={handleRatioChange}
          />
          {ratioValidated === "error" && <FormHelperText>
            <HelperText>
              <HelperTextItem icon={<ExclamationCircleIcon />} variant={ratioValidated}>
                Enter two numbers separated by semicolon (:)
              </HelperTextItem>
            </HelperText>
          </FormHelperText>}
        </FormGroup>
        <FormGroup label="Total Amount (Resin A + Resin B)" fieldId="total">
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
                {total !== "" && total <= 0 && "Must be a number greater than zero" }
                {total === "" && "Must be a number" }
              </HelperTextItem>
            </HelperText>
          </FormHelperText>}
        </FormGroup>

        <FormGroup>
          <FormGroup label="Resin A" fieldId="resinA">
            <TextInput
              id="resinA"
              value={resinA}
              isDisabled
            />
          </FormGroup>
          <FormGroup label="Resin B" fieldId="resinB">
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

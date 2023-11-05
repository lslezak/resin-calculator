import React from 'react';
import {
  FormHelperText,
  HelperText,
  HelperTextItem,
} from '@patternfly/react-core';

import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

const ValidationError = ({ children }) => {
  return <FormHelperText>
    <HelperText>
      <HelperTextItem icon={<ExclamationCircleIcon />} variant="error">
        {children}
      </HelperTextItem>
    </HelperText>
  </FormHelperText>;
};

export default ValidationError;

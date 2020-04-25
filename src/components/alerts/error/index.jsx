import { string } from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import React from 'react';

/**
 * Alert Error
 * @param message
 * @returns {React.FunctionComponent}
 */
const AlertError = ({ message }) => (
  <Alert variant="filled" severity="error">
    {message}
  </Alert>
);

AlertError.propTypes = {
  message: string,
};

export default AlertError;

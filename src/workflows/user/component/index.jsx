import React from 'react';
import userConfig from '../constants';
import TextField from '../../../components/fields/text';

const User = () => {
  return (
    <div>
      <TextField
        label={userConfig.INPUT_NAME}
        name={userConfig.INPUT_NAME}
        type="text"
      />
      <TextField
        label={userConfig.INPUT_SURNAME}
        name={userConfig.INPUT_SURNAME}
        type="text"
      />
      <TextField
        label={userConfig.INPUT_EMAIL}
        name={userConfig.INPUT_EMAIL}
        type="email"
      />
    </div>
  );
};

export default User;

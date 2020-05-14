import React from 'react';
import activityConfig from '../constants';
import SelectField from '../../../components/fields/select';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Activity = () => {
  return (
    <Container>
      <SelectField
        label={activityConfig.SELECT_NAME}
        name={activityConfig.SELECT_NAME}
        list={activityConfig.ACTIVITY_LIST}
      />
    </Container>
  );
};

export default Activity;

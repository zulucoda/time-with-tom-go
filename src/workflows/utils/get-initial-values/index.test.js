import getInitialValues from '.';

describe('Workflow - Utils - Get Initial Values - Unit Test', function () {
  test('should return merged object literal', () => {
    const workflowA = () => ({
      component: () => 'some react component A',
      payload: (values) => ({ ...values }),
      validate: (values) => ({ ...values }),
      initialValues: {
        valA1: 'valA1',
        valA2: 'valA2',
      },
    });
    const workflowB = () => ({
      component: () => 'some react component B',
      payload: (values) => ({ ...values }),
      validate: (values) => ({ ...values }),
      initialValues: {
        valB1: 'valB1',
        valB2: 'valB2',
      },
    });
    const workflows = [workflowA(), workflowB()];
    const act = getInitialValues(workflows);
    expect(act).toMatchSnapshot({
      valA1: 'valA1',
      valA2: 'valA2',
      valB1: 'valB1',
      valB2: 'valB2',
    });
  });
});

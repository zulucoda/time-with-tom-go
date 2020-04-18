import buildPayload from '.';

describe('Workflow - Utils - Build Payload - Unit Test', () => {
  test('should get payload from each workflow and merge into payload object', async () => {
    const workflowA = () => ({
      component: () => 'some react component A',
      payload: (values) => ({ finalValA: 'valA1 and valA2' }),
      validate: (values) => ({}),
      initialValues: {
        valA1: '',
        valA2: '',
      },
    });
    const workflowB = () => ({
      component: () => 'some react component B',
      payload: (values) => ({ valB1: 'valB1', valB2: 'valB2' }),
      validate: (values) => ({}),
      initialValues: {
        valB1: '',
        valB2: '',
      },
    });

    const workflows = [workflowA(), workflowB()];
    const setup = buildPayload(workflows);
    const values = {
      valA1: 'valA1',
      valA2: 'valA2',
      valB1: 'valB1',
      valB2: 'valB2',
    };
    const act = await setup(values);
    expect(act).toMatchSnapshot({
      finalValA: 'valA1 and valA2',
      valB1: 'valB1',
      valB2: 'valB2',
    });
  });
});

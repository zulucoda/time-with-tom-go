import validateWorkflows from '.';

describe('Workflows - Utils - ValidateWorkflows - Unit Test', () => {
  test('should validate all workflows in parallel and merge error object', async () => {
    const workflowA = () => ({
      component: () => 'some react component A',
      payload: (values) => ({ ...values }),
      validate: (values) => ({
        valA1: 'valA1 is required',
        valA2: 'valA2 is required',
      }),
      initialValues: {
        valA1: '',
        valA2: '',
      },
    });
    const workflowB = () => ({
      component: () => 'some react component B',
      payload: (values) => ({ ...values }),
      validate: (values) => ({
        valB1: 'valB1 is required',
        valB2: 'valB2 is required',
      }),
      initialValues: {
        valB1: '',
        valB2: '',
      },
    });

    const workflows = [workflowA(), workflowB()];
    const setup = validateWorkflows(workflows);
    const values = {
      valA1: '',
      valA2: '',
      valB1: '',
      valB2: '',
    };
    const act = await setup(values);
    expect(act).toMatchSnapshot({
      valA1: 'valA1 is required',
      valA2: 'valA2 is required',
      valB1: 'valB1 is required',
      valB2: 'valB2 is required',
    });
  });
});

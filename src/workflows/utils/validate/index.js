/**
 * Validate workflows in parallel
 * @param {Array<{component, payload, validate, initialValues}>} workflows
 * @return {function(Object<{}>): Object<{}>}
 */
const validateWorkflows = (workflows) => async (values) => {
  const errors = await Promise.all(
    workflows.map((workflow) => ({ ...workflow.validate(values) })),
  );

  return errors.reduce((previousErrors, errors) => ({
    ...previousErrors,
    ...errors,
  }));
};

export default validateWorkflows;

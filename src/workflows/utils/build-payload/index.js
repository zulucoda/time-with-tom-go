/**
 * Build payload for all workflows in parallel
 * @param {Array<{component, payload, validate, initialValues}>} workflows
 * @return {function(Object<{}>): Object<{}>}
 */
const buildPayload = (workflows) => async (values) => {
  const payload = await Promise.all(
    workflows.map((workflow) => ({ ...workflow.payload(values) })),
  );

  return payload.reduce((previousPayload, currentPayload) => ({
    ...previousPayload,
    ...currentPayload,
  }));
};

export default buildPayload;

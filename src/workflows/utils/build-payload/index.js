/**
 * Build payload for all workflows in parallel
 * @param {Workflow[]} workflows
 * @return {function(Object): Object}
 */
const buildPayload = (workflows) => async (values) => {
  const payload = await Promise.all(
    workflows
      .filter((workflow) => workflow.isActive(values))
      .map((workflow) => ({ ...workflow.payload(values) })),
  );

  return payload.reduce((previousPayload, currentPayload) => ({
    ...previousPayload,
    ...currentPayload,
  }));
};

export default buildPayload;

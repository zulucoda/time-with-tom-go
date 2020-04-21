/***
 * get initial values from workflow and sub-worfklow for formik form
 * @param {Workflow[]} workflows
 * @return {Object} initialValues
 */
export default function getInitialValues(workflows) {
  return workflows
    .map((workflow) => ({ ...workflow.initialValues }))
    .reduce((previousValue, initialValues) => ({
      ...previousValue,
      ...initialValues,
    }));
}

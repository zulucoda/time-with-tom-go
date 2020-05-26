import getActivityAmount from '../../activity/util';

/**
 *
 * The isActive acts as the business logic section. In this section we may use whatever logic or data to
 * verify whether our form should be active. This will be used by formik to check whether it needs to do
 * the following for the workflow:
 *  - display the workflow component with its fields
 *  - do the validation
 *  - get the payload
 *
 *  Business Rule(s):
 *  1) Only display payment for paid activities - where amount is greater 0 (all paid items)
 *  2) Do NOT collect payment for free activities - where amount is 0
 * @return {boolean}
 */
const isActive = (values) => getActivityAmount(values) > 0;

export default isActive;

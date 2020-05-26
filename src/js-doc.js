/**
 * @typedef InitialValues
 * @type {object}
 */

/**
 * @typedef Values
 * @type {{}}
 */

/**
 * @typedef Errors
 * @type {object}
 */

/**
 * @typedef Payload
 * @type {object}
 */

/**
 * @typedef Workflow
 * @type {object}
 * @property {function(): React.FunctionComponent} Component - React component
 * @property {function(Values): Payload} payload - payload function
 * @property {function(Values): Errors} validate - validate function
 * @property {function(Values): boolean} isActive - is workflow active
 * @property {object} initialValues - initial values object
 */

/**
 * @typedef Dropdown
 * @type {object}
 * @property {string} value
 * @property {string} title
 */

/**
 * @typedef FieldMetaProps
 * @type {object}
 * @property {string} value - Value of the field
 * @property {InitialValues} initialValue - Initial value of the field
 * @property {string} error - Error message of the field
 * @property {boolean} touched - Has the field been visited?
 * @property {boolean} initialTouched - Initial touched state of the field
 * @property {string} initialError - Initial error message of the field
 */

/**
 * @typedef ActiveLink
 * @type {object}
 * @property {string} path
 * @property {string} url
 * @property {boolean} isExact
 * @property {object} params
 */

/**
 * @typedef ActivityList
 * @type {object}
 * @property {string} value
 * @property {string} title
 * @property {number} amount
 */

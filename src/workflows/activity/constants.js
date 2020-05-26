const ACTIVITY_VALUE_NONE = 'none';
const ACTIVITY_TITLE_NONE = 'Please select';
const ACTIVITY_AMOUNT_NONE = -1;

const ACTIVITY_VALUE_GOLF = 'golf';
const ACTIVITY_TITLE_GOLF = 'Golf';
const ACTIVITY_AMOUNT_GOLF = 500;

const ACTIVITY_VALUE_TENNIS = 'tennis';
const ACTIVITY_TITLE_TENNIS = 'Tennis';
const ACTIVITY_AMOUNT_TENNIS = 250;

const ACTIVITY_VALUE_SQUASH = 'squash';
const ACTIVITY_TITLE_SQUASH = 'Squash';
const ACTIVITY_AMOUNT_SQUASH = 0;

const ACTIVITY_VALUE_TRAIL_RUN = 'trail_run';
const ACTIVITY_TITLE_TRAIL_RUN = 'Trail run';
const ACTIVITY_AMOUNT_TRAIL_RUN = 0;

const ACTIVITY_VALUE_TRAIL_CYCLING = 'cycling';
const ACTIVITY_TITLE_TRAIL_CYCLING = 'Cycling';
const ACTIVITY_AMOUNT_TRAIL_CYCLING = 350;

/**
 * Activity list
 * @type {ActivityList[]}
 */
const ACTIVITY_LIST = [
  {
    value: ACTIVITY_VALUE_NONE,
    title: ACTIVITY_TITLE_NONE,
    amount: ACTIVITY_AMOUNT_NONE,
  },
  {
    value: ACTIVITY_VALUE_GOLF,
    title: ACTIVITY_TITLE_GOLF,
    amount: ACTIVITY_AMOUNT_GOLF,
  },
  {
    value: ACTIVITY_VALUE_TENNIS,
    title: ACTIVITY_TITLE_TENNIS,
    amount: ACTIVITY_AMOUNT_TENNIS,
  },
  {
    value: ACTIVITY_VALUE_SQUASH,
    title: ACTIVITY_TITLE_SQUASH,
    amount: ACTIVITY_AMOUNT_SQUASH,
  },
  {
    value: ACTIVITY_VALUE_TRAIL_RUN,
    title: ACTIVITY_TITLE_TRAIL_RUN,
    amount: ACTIVITY_AMOUNT_TRAIL_RUN,
  },
  {
    value: ACTIVITY_VALUE_TRAIL_CYCLING,
    title: ACTIVITY_TITLE_TRAIL_CYCLING,
    amount: ACTIVITY_AMOUNT_TRAIL_CYCLING,
  },
];

/**
 * Select name
 * @type {string}
 */
const SELECT_NAME = 'activity';

export default {
  ACTIVITY_LIST,
  SELECT_NAME,
  ACTIVITY_VALUE_NONE,
};

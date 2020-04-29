import format from 'date-fns/format';
import add from 'date-fns/add';

const LOCAL_STORAGE_KEY = 'time-with-tom-local-storage';

const createFakeData = () => {
  const sampleBookingRequest = (dateAdd) => ({
    name: 'Muzi',
    surname: 'Buthelezi',
    email: 'muzi@mfbproject.co.za',
    activity: 'squash',
    date: format(
      add(new Date(), {
        days: dateAdd + 1,
      }),
      'yyyy-MM-dd',
    ),
    startTime: '09:00',
    endTime: '13:00',
  });
  return JSON.stringify([...Array(5).keys()].map(sampleBookingRequest));
};

/**
 * Fake init - fake initial data and store in local storage
 */
export const fakeInit = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, createFakeData());
};

/**
 * Fake post - save data to local storage
 * @param {object} payload
 */
export const fakePost = (payload) => {
  const data = fakeGet();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...data, payload]));
};

/**
 * Fake get - get data from local storage
 * @returns {any}
 */
export const fakeGet = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY) || createFakeData();
  return JSON.parse(data);
};

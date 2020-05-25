import add from 'date-fns/add';
import parse from 'date-fns/parse';

const LOCAL_STORAGE_KEY = 'time-with-tom-local-storage';

const createFakeData = () => {
  const sampleBookingRequest = (dateAdd) => ({
    name: 'Muzi',
    surname: 'Buthelezi',
    email: 'muzi@mfbproject.co.za',
    activity: 'squash',
    date: add(new Date(), {
      days: dateAdd + 1,
    }),
    startTime: new Date('2020-04-21 09:00'),
    endTime: new Date('2020-04-21 13:00'),
    paid: true,
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

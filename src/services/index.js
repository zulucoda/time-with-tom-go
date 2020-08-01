import Axios from 'axios';

const API_BASE_PATH = 'http://localhost:5000/api/';

const axios = Axios.create({
  baseURL: API_BASE_PATH,
  headers: { 'Content-Type': 'application/json' },
});

export const post = async ({ path, payload }) => {
  try {
    return await axios.post(path, payload);
  } catch (e) {
    console.error('Error occurred while calling POST');
    console.error('Details:', JSON.stringify({ path, payload }));
    console.error(e);
  }
};

export default axios;

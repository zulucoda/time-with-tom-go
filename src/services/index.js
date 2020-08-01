import Axios from 'axios';

const API_BASE_PATH = 'http://localhost:5000/api/';

const axios = Axios.create({
  baseURL: API_BASE_PATH,
  headers: { 'Content-Type': 'application/json' },
});

export default axios;

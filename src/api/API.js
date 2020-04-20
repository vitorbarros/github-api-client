import axios from 'axios';
import { config } from '../config';

const baseURL = config.ApiUrl;

const api = axios.create({
  headers: { Accept: 'application/json' },
});

api.interceptors.request.use(request => {
  request.baseURL = baseURL;
  return request;
});

export default api;

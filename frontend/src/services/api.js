import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000'
});

export const fetchJobs = () => API.get('/jobs');
export const uploadResume = (data) => API.post('/resume', data);
export const matchJobs = () => API.post('/match');
export const applyJob = (data) => API.post('/apply', data);
export const chatAI = (data) => API.post('/chat', data);

export default API;

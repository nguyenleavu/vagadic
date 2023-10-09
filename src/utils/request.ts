import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
});

request.interceptors.response.use(
    (response) => response?.data,
    (error) => Promise.reject(error)
);

export default request;

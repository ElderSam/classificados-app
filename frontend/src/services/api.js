import axios from 'axios';

const port = '5001';

const api = axios.create({
    baseURL: `https://localhost:${port}/api`
});

export default api;

/* Note: To access http://localhost:5001/api, you must start the server in backend/ */
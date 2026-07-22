import axios from 'axios';

export default axios.create({
    baseURL:'http://98.83.39.85:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

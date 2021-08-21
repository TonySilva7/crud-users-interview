import axios from 'axios';

const api = axios.create({
	baseURL: 'http://161.97.167.198:4109/v1',
});

export default api;

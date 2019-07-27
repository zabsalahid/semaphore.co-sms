require('dotenv').config();
const axios = require('axios');
const instance = axios.create({
	baseURL: 'https://semaphore.co/api/v4/',
});

const Semaphore = {
	send: async ({ apikey, number, message, sendername }) => {
		const response = await instance.post('/messages', {
			apikey: process.env.SEMAPHORE_API_KEY || apikey,
			number,
			message,
			sendername,
		});

		const { status, statusText, data } = response;
		return { status, statusText, data };
	},
};

module.exports = Semaphore;

const Semaphore = require('../lib');

let SendSMS = async () => {
	let obj = {
		number: '09123456789',
		message: `What's up madlang people?`,
		sendername: 'SEMAPHORE', // or the sendername you applied for
	};
	let response = await Semaphore.send(obj);
	console.log(response);
};

SendSMS();

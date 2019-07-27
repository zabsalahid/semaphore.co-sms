# Node semaphore.co-sms

[![NPM](https://nodei.co/npm/semaphore.co-sms.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/semaphore.co-sms/)

## Intro

This package just implements the API available for semaphore.co. They don't have one for nodejs.

## Installation

```terminal
npm install semaphore.co-sms
```

## Environment File

- create `.env` file

```
SEMAPHORE_API_KEY=apikey
```

## Usage

```js
const Semaphore = require('semaphore.co-sms');

let SendSMS = async () => {
	let obj = {
		apikey: apikey, // or you can put the api key in an .env file as SEMAPHORE_API_KEY
		number: '09123456789',
		message: `What's up madlang people?`,
		sendername: 'SEMAPHORE', // or the sendername you applied for
	};
	let response = await Semaphore.send(obj);
	console.log(response);
};

SendSMS();
```

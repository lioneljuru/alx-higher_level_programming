#!/usr/bin/node
const request = require('request');
request.get(process.argv[2]).on('response', function (response) {
	constole.log(`code: ${response.statusCode}`);
});

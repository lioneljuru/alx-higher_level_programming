#!/usr/bin/node

const req = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';
req.get(url + id, funstion (error, res, body) {
	if (error) {
		console.log(error);
	}
	const data = JSON.parse(body);
	const dd = data.characters;
	for (const i of dd) {
		req.get(i, funstion (error, res, body1) {
			if (error) {
				console.log(error);
			}
			const data1 = JSON.parse(body1);
			console.log(data1.name);
		});
	}
});

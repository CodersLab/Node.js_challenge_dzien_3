const fs = require('fs');
const crypto = require('crypto');

const path = process.argv.slice(2).toString();

const checksum = path => {
	fs.readFile(path, 'utf-8', (err, data) => {
		if (err) return console.log('Błąd odczytu pliku');
		console.log(crypto.createHmac('sha256', data).digest('hex'));
	});
};

checksum(path)
const EXPECTED_HASH = '4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca';

const fs = require('fs');
const crypto = require('crypto');

const
	file = process.argv[2] || '',
	algorithm = 'sha256';

fs.readFile(file, 'utf8', (err, data) => {
	if (err === null) {
		let hash = crypto.createHmac(algorithm, data).digest('hex');
		console.log(hash);
		if (EXPECTED_HASH === hash)
			console.log('Ok');
		else
			console.log('Bad hash, but why?');	
	} else {
		console.log(`We have problem with open file, error: ${err}`);
	}
});
const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod
const crypto = require('crypto');

const
	algorithms = ['sha256', 'sha512', 'md5', 'rmd160'],
	texts = [
		'??TegoHasła',
		'CodersLab',
		'Node.js Szyfruje Pliki',
		'Zaźółć Gęślą Jaźń',
		'Moje Haslo 1@3!',
		'111#$((@)n',
		'Dzisiaj Szyfruje 83',
	];


checkPass(algorithms, texts);

function createHash(algorithm, text) {
	return crypto.createHmac(algorithm, text).digest('hex');
}

function checkPass(algorithms, texts) {
	texts.forEach(text => {
		algorithms.forEach(algorithm => {
			if (MY_PWD_HASH === createHash(algorithm, text)) {
				console.log(`algorithm: ${algorithm}, text: ${text}`);
				return;
			}
		});	
	});
}
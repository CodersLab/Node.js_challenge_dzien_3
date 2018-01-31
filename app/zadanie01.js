const crypto = require('crypto');

const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const tabPasswd = [
	'??TegoHasła',
	'CodersLab',
	'Node.js Szyfruje Pliki',
	'Zaźółć Gęślą Jaźń',
	'Moje Haslo 1@3!',
	'111#$((@)n',
	'Dzisiaj Szyfruje 83'
];

const tabAlgorithms = ['sha256', 'sha512', 'md5', 'rmd160'];

searchPasswd = (tabPasswd, tabAlgorithms, hash) => {
	let searchPasswd;
	
	tabPasswd.forEach(p => {
		tabAlgorithms.forEach(a => {
			if (crypto.createHmac(a, p).digest('hex') === hash) {
				searchPasswd = `Szukane hasło to: ${p}. Uzyto algorytmu: ${a}`;
			};
		});
	});

	return searchPasswd ? console.log(searchPasswd) : console.log('Hasło nie zostało odnalezione');
}

searchPasswd(tabPasswd, tabAlgorithms, MY_PWD_HASH);
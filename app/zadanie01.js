//Twój kod

const crypto = require('crypto');

const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
const password = [
    '??TegoHasła',
    'CodersLab',
    'Node.js Szyfruje Pliki',
    'Zaźółć Gęślą Jaźń',
    'Moje Haslo 1@3!',
    '111#$((@)n',
    'Dzisiaj Szyfruje 83'
];
const algorithm = ['sha256', 'sha512', 'md5', 'rmd160'];

password.forEach( passwordElem => {
    algorithm.forEach( algorithmElem => {
        const hash = crypto.createHmac(algorithmElem, passwordElem)
            .digest('hex');
        hash === MY_PWD_HASH ? console.log(`password: ${passwordElem}; algorithm: ${algorithmElem}`) : null;
    });
});


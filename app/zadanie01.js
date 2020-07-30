const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod

const crypto = require('crypto');

const passwords = ['??TegoHasła',
    'CodersLab',
    'Node.js Szyfruje Pliki',
    'Zaźółć Gęślą Jaźń',
    'Moje Haslo 1@3!',
    '111#$((@)n',
    'Dzisiaj Szyfruje 83'
]

const algorithms = ['sha256', 'sha512', 'md5', 'rmd160'];

algorithms.forEach(algoritm => {
    passwords.forEach(pasword => {
        let hash = crypto.createHmac(algoritm, pasword)
            .digest('hex');

        if (MY_PWD_HASH === hash) {
            console.log(`algoritm - ${algoritm}, pasword - ${pasword}`);
        }
    })
})

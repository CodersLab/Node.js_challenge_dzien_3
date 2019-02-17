const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod
const passes = ['??TegoHasła',
'CodersLab',
'Node.js Szyfruje Pliki',
'Zaźółć Gęślą Jaźń',
'Moje Haslo 1@3!',
'111#$((@)n',
'Dzisiaj Szyfruje 83'
]
const algorithmTypes = ['sha256', 'sha512', 'md5', 'rmd160'];
const crypto = require('crypto');


const hash = crypto.createHmac(algorithmTypes[3], passes[4])
    .digest('hex');
console.log(MY_PWD_HASH.length)    
console.log(hash)    
console.log('hash length: ', hash.length)    
console.log(hash === MY_PWD_HASH);
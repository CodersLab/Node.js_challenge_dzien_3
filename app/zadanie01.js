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

// console.log(MY_PWD_HASH.length)    

    passes.filter( (pass) => {
        algorithmTypes.filter((algo) => {
            const hash = crypto.createHmac(algo, pass).digest('hex')
            MY_PWD_HASH === hash ?  console.log(`algorytm to: ${algo},
hasło to: ${pass}`) : null            
        })
    })
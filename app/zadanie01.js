const crypto = require('crypto');
const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod
const passwordList = ['??TegoHasła','CodersLab','Node.js Szyfruje Pliki','Zaźółć Gęślą Jaźń','Moje Haslo 1@3!','111#$((@)n','Dzisiaj Szyfruje 83'];

const algorithmList = ['sha256', 'sha512', 'md5', 'rmd160'];

passwordList.forEach(password=>{
    algorithmList.filter(algorithm=>{
        const encrypted = crypto.createHmac(algorithm, password).digest('hex');
        (encrypted === MY_PWD_HASH)&&console.log(`hasło to:  ${password} ; algorytm to: ${algorithm}`) 
    })
})
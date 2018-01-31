const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod

const crypto = require('crypto');

const arr = [
    '??TegoHasła',
    'CodersLab',
    'Node.js Szyfruje Pliki',
    'Zaźółć Gęślą Jaźń',
    'Moje Haslo 1@3!',
    '111#$((@)n',
    'Dzisiaj Szyfruje 83'
]

for(let i=0; i<arr.length; i++){
    const text = arr[i];
    const hash = crypto.createHmac('rmd160', text)
        .digest('hex');
    if(hash == MY_PWD_HASH){
        console.log(text +' to prawidłowe hasło!')
    } else {
        console.log(text + ' to błędne hasło!');
    }
}

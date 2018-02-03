const crypto = require('crypto');

const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const hashArr = ['sha256', 'sha512', 'md5' , 'rmd160'];

const texts = ['??TegoHasła',
'CodersLab',
'Node.js Szyfruje Pliki',
'Zaźółć Gęślą Jaźń',
'Moje Haslo 1@3!',
'111#$((@)n',
'Dzisiaj Szyfruje 83']

let unscript = () => {

    let hashAlgoritm = '';
    let hash = '';

    for(index in hashArr){
        hashAlgoritm = hashArr[index];
         
        for(index in texts){

        hash = crypto.createHmac(hashAlgoritm, texts[index]).digest('hex');

            if(hash === MY_PWD_HASH){

                console.log(`Answer: ${texts[index]}`);
            }

        }

    }
}
unscript();



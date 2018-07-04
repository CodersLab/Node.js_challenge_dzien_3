const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const crypto = require('crypto');
var algs = ['sha256', 'sha512', 'md5', 'rmd160'];

var pwds = [ '??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki' , 'Zaźółć Gęślą Jaźń' , 'Moje Haslo 1@3!' , '111#$((@)n', 'Dzisiaj Szyfruje 83' ];

algs.forEach(alg => {
    pwds.forEach(pwd => {
        var hash= crypto.createHmac(alg, pwd)
        .digest('hex');

        if (MY_PWD_HASH===hash) {
            console.log('algorytm: '+ alg + ', hasło: ' + pwd);
        }

    })
   
});
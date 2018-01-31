const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const crypto = require('crypto');

const data = {
    key:  [ '??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'],
    algorithm: ['sha256', 'sha512', 'md5', 'rmd160']
}

    
data.key.forEach(key => {
  data.algorithm.forEach( algorithm => {
   let hash = crypto.createHmac(algorithm, key).digest('hex');
   if (hash == MY_PWD_HASH){
       console.log('Uzyty klucz to: ' + key + ', a algorytm to: ' + algorithm + '.');
   }
  });
});
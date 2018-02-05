const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
const crypto = require('crypto');
//Twój kod

let algorithmArray = ['sha256','sha512','md5','rmd160'];
let passwordArray = ['??TegoHasła','CodersLab','Node.js Szyfruje Pliki','Zaźółć Gęślą Jaźń','Moje Haslo 1@3!','111#$((@)n','Dzisiaj Szyfruje 83'];

for (let i=0;i<passwordArray.length;i++){
  for (let j=0;j<algorithmArray.length;j++){
    let hash = crypto.createHmac(algorithmArray[j], passwordArray[i]).digest('hex');
    if (hash === MY_PWD_HASH){
      console.log('Algorytm: '+algorithmArray[j]);
      console.log('Hasło: '+passwordArray[i]);
    }
  }
}

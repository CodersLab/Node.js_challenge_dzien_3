const crypto = require('crypto');
const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
const passwords = ['??TegoHasła','CodersLab','Node.js Szyfruje Pliki','Zaźółć Gęślą Jaźń','Moje Haslo 1@3!','111#$((@)n','Dzisiaj Szyfruje 83']
const algorithms = ['sha256', 'sha512', 'md5', 'rmd160'];

passwords.forEach(pass => {
  algorithms.forEach(code =>{
    const cryptoPass = crypto.createHmac(code, pass).digest('hex');
    if(cryptoPass === MY_PWD_HASH){
      console.log('Hasło to: ' + pass);
      console.log('Algorytm to: ' + code);
    }
  })
});

const crypto = require('crypto');
const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod
const passwords = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];
const algorythms = ['sha256', 'sha512', 'md5', 'rmd160'];

passwords.forEach(pswd => {
  algorythms.forEach(algorythm => {
    const result = crypto.createHmac(algorythm, pswd);
    console.log(result.digest('hex') === MY_PWD_HASH ? '-> ' : '   ', algorythm, `"${pswd}"`);
  });
});
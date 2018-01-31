const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const crypto = require('crypto');

const algorithm = ['aes192', 'aes-256-cbc', 'aes-256-ecb'];
const password = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];

password.forEach(pass => {
  algorithm.forEach(alg => {
    const decipher = crypto.createDecipher(alg, pass);
    let decrypted = decipher.update(MY_PWD_HASH, 'hex', 'utf8');
    try {
      decrypted += decipher.final('utf8');
      console.log(decrypted);
    } catch (err) {
      console.log('złe hasło');
    }
  });
});

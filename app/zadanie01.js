const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const password = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];

const algorithms = ['sha256', 'sha512', 'md5', 'rmd160'];

const crypto = require('crypto');

function decodeText(encodedText, password, algorithm){
    const decipher = crypto.createDecipher(algorithm, password);

    let decrypted = decipher.update(encodedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
password.map((password, algorithms) =>
    console.log(decodeText(MY_PWD_HASH, password, algorithms))
);




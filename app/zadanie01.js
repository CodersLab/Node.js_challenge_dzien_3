const crypto = require('crypto');

const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const password = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];

const algorithms = ['sha256', 'sha512', 'md5', 'rmd160'];

let whichPassword = (password, algorithms, hash) => {
    let correctPassword;

    password.forEach(p => {
        algorithms.forEach(a => {
            if (crypto.createHmac(a, p).digest('hex') === hash) {
                correctPassword = `Our password is: ${p}. Our algorithm is: ${a}`;
            };
        });
    });

    return whichPassword ? console.log(correctPassword) : console.log('Password not find');
};

whichPassword(password, algorithms, MY_PWD_HASH);
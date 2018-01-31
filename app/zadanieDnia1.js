//Twój kod

const fs = require('fs');
const crypto = require('crypto');

const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
    if (err === null){
        const hash = crypto.createHmac('sha256', data)
            .digest('hex');
        console.log(hash); // d5b1c451f5a44e4fcce7af164b6470f4ebd06b16c8b65adda696c6c7f328289b
    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});
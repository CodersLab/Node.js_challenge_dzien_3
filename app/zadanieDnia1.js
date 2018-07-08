//Twój kod
var path;
var count = 0;
const crypto = require('crypto');
const fs=require('fs');

process.argv.forEach((val, index) => {
    if (count ===2) {
        path = val;

    }
    count++;
});

fs.readFile(path , 'utf8', (err, data) => {
    if (err === null){
        var hash= crypto.createHmac('sha256', data)
        .digest('hex');

        console.log(hash);

    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});

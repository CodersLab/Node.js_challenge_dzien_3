//Twój kod
const fs = require('fs');
const crypto = require('crypto');

const arr = process.argv[2];
console.log('argument to: ',arr);
// var text = '';
fs.readFile(arr, 'utf8', (err, data) => {
    if (err === null) {
        console.log('Poprawnie odczytano plik :', data);
        // const paresData = JSON.parse(data);

        console.log('type to: ' ,typeof data)

        const text = data;

        // console.log('type is: ', typeof paresData)
        const hash = crypto.createHmac('sha256', text)
            .digest('hex');
        console.log('PASS IS: ', hash);






   } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});

// 
const fs = require('fs');
const crypto = require('crypto');

function ReadAndCrypto(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err === null){
            console.log("Poprawnie odczytano plik. \n", data);
            const hash = crypto.createHmac('sha256', data)
                .digest('hex');
            console.log(hash);


        } else {
            console.log('Błąd podczas odczytu pliku!', err);
        }
    });
}

ReadAndCrypto(process.argv[2]);

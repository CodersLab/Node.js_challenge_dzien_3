//Twój kod
const crypto = require('crypto');
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err === null){ 
        console.log('Poprawnie odczytano plik.');
        let dataHashed = crypto.createHmac('sha256', data)
        .digest('hex');
    console.log('Wartość zakodowana:')
    console.log(dataHashed); 

    }else{ 
        console.log('Błąd podczas odczytu pliku!', err);
    }
});

//Twój kod

const crypto = require('crypto');
const fs = require('fs');

const args = process.argv[2];

fs.readFile(args, 'utf8', (err, data) => {
   if (err === null) {
       console.log('Odczytalem plik ' + args + '.');
       let hash = crypto.createHmac('sha256', data).digest('hex');
       console.log('Suma kontrolna sha256 dla pliku ' + args + ' to: ' + hash + '.');
   } else {
       console.log('Nie udalo sie odczytac pliku. );', err);
   }
});
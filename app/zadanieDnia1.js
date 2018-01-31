//Twój kod
const fs = require('fs');
const crypto = require('crypto');

const file = process.argv[2] || './data/zadanieDia1/testFile.txt';

const controlSum = (file) => {
  console.log('file: ', file);
  fs.readFile(file, 'utf8', (err, data) => {
    console.log('data: ', data);
    if (!err) {
      console.log('hash: ', crypto.createHmac('sha256', data).digest('hex'));
    } else {
      console.log('Błąd przy czytaniu pliku:\n', err);
    }
  });
};

controlSum(file); //czemu rezultat jest inny niż w poleceniu?
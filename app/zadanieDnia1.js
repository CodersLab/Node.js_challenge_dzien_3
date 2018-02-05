//Twój kod
const fs = require('fs');
const crypto = require('crypto');

let [element, index, filePath] = [...process.argv];

fs.readFile(filePath, 'UTF-8', (err,data) => {
  if (err === null){
    let hash = crypto.createHmac('sha256',data).digest('hex');
    console.log(hash);
  } else {
    console.log('Błąd odczytu pliku.');
  }
});

const fs = require('fs');
const crypto = require('crypto');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err === null) {
    const hash = crypto.createHmac('sha256', data)
        .digest('hex');
    console.log(hash); 
  } else {
    console.log('Błąd podczas odczytu pliku!', err);
  }
});

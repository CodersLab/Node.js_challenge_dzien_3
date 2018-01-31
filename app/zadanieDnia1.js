//Twój kod
const fs = require('fs');

const crypto = require('crypto');

const text = process.argv[2];

fs.readFile(text, 'utf8', (err, data) => {
    if (err === null){
        const hash = crypto.createHmac('sha256', data)
            .digest('hex');
        console.log(hash);
    } else {
        console.log(`Błąd...`, err)
    }
});



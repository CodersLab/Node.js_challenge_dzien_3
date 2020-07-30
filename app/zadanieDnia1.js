//Twój kod
const fs = require('fs');
const crypto = require('crypto');

const codeFunc = (linkToFile) => {
    fs.readFile(linkToFile, 'utf8', (err, data) => {
        if (err === null) {
            console.log(data);
            const hash = crypto.createHmac('sha256', data)
                .digest('hex');
            console.log(hash);
        } else {
            console.log(err);
        }
    })
}

const linkToSomeText = './data/zadanieDnia1/testFile.txt';

codeFunc(linkToSomeText);

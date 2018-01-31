
const fs = require("fs");
const crypto = require('crypto');
const file = process.argv[2];

if (typeof file === 'undefined') {
    console.log("Wymagany parametr!");
    process.exit(1);
}

fs.readFile(file, 'utf-8', (err, data) => {
    if ((err === null)) {
        /*
            Nie wiem czemu wyświetla:
            d5b1c451f5a44e4fcce7af164b6470f4ebd06b16c8b65adda696c6c7f328289b
            zamiast:
            4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca
         */
        console.log(encodeText(data));
    }
    else {
        console.log(err);
    }
});

function encodeText(text){
    return crypto.createHmac('sha256', text).digest('hex');
}
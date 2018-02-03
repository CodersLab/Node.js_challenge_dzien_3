const fs = require('fs');
const crypto = require('crypto');
const exerHash = '4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca'

let read = (filePath) => {

    return new Promise((resolve, reject) => {

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err === null){
                resolve(data)
            } else {
                throw err;
            }
        });
    });    
}

let hashText = (text) => {
    hash = crypto.createHmac('sha256', text).digest('hex');
    console.log(hash);
}


let filePath = '';

process.argv.forEach((val, index) => {
    
    if(index === 2){
        filePath = val;
        read(filePath).then((data) => { hashText(data) } );
    };
    
});
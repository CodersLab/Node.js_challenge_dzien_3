//Twój kod
const fs = require('fs');
const crypto = require('crypto');

process.argv.forEach((val, index) => {
  if(index > 1 ){
    fs.readFile(val, 'utf-8', (err, data)=> {
      if(err === null) {
        let hash = crypto.createHmac('sha256', data).digest('hex');
        console.log(hash);
      }
    });
  }
});

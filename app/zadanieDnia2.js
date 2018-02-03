const crypto = require('crypto');

const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';

const text = 'Pobawmy się jak komputerowy Detektyw';

const algorithm = ['aes192', 'aes-256-cbc', 'aes-256-ecb'];

const getPassword = (text) => {
    let textArr = text.split(' ');
    let pass = '';

    for(index in textArr){
        let word = textArr[index];
        pass += word[0] + word[word.length - 1];
    }
    return pass;
}

let pass = getPassword(text);

const decodeText = (encodedText, password, algorithm) => {

    for(index in algorithm){
        const decipher = crypto.createDecipher(algorithm[index], password);
        let decrypted = decipher.update(encodedText, 'hex', 'utf8');

        try {
            decrypted += decipher.final('utf8');
            console.log(decrypted);
        } catch (err) {
            console.log(`Wystąpił błąd ${err.message}`);
        }
        
    }
    
}

decodeText(ENCRYPTED_TEXT, pass, algorithm);



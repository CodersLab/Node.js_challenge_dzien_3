const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';

//Twój kod

// console.log(ENCRYPTED_TEXT.length)


const text = 'Pobawmy się jak komputerowy Detektyw'
const result = []
text.split(" ").forEach( el => result.push(el[0] + el[el.length-1]) )
const pass = result.join('')

// console.log(pass)
// console.log('result: ',typeof result)

// decipher:

const crypto = require('crypto');
const algorithms = ['aes192', 'aes-256-cbc', 'aes-256-ecb'];



function decodeText(encodedText, password, algorithm) {
    const decipher = crypto.createDecipher(algorithm, password);

    let decrypted = decipher.update(encodedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


algorithms.forEach(el => {
    try{
        console.log(decodeText(ENCRYPTED_TEXT, pass, el))
    }
    catch(err){
        // console.log('blad: ')
    }
})

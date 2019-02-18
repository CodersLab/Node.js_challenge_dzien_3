const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';

//Twój kod

console.log(ENCRYPTED_TEXT.length)


const text = 'Pobawmy się jak komputerowy Detektyw'
const result = []
text.split(" ").forEach( el => result.push(el[0] + el[el.length-1]) )
const pass = result.join('')

// console.log(pass)

// decipher:

const crypto = require('crypto');
const algorithms = ['aes192', 'aes-256-cbc', 'aes-256-ecb'];






var dd = '';
for(let i=0; i<algorithms.length; i++){
    // console.log('JOU')
    
        const decipher = crypto.createDecipher(algorithms[i], pass);

        let decrypted = decipher.update(ENCRYPTED_TEXT, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
          console.log(decrypted)
    // if (typeof decodeText(ENCRYPTED_TEXT, pass, algorithms[i]) === "string"){
    //     console.log(`dziala ${i}`)
    // }else{
    //     console.log('nie dziala')
    // }
}
























// algorithms.filter(el => {
//     if (typeof decodeText(ENCRYPTED_TEXT, password, el) === "string"){
//         console.log(decodeText(ENCRYPTED_TEXT, password, el))

//     }else{
//         null    
//     }
// })

// console.log(typeof decodeText(ENCRYPTED_TEXT, password, algorithms[1]))

// if (typeof decodeText(ENCRYPTED_TEXT, password, algorithms[1]) == "string"){
//     console.log('dziala')
// }else{
//     console.log('nie dziala')
// }
// var tekscik = ''
// algorithms.filter(el => {
//     typeof decodeText(ENCRYPTED_TEXT, password, el) === "string"
//     tekscik += decodeText(ENCRYPTED_TEXT, password, el)
// })
// console.log(tekscik);
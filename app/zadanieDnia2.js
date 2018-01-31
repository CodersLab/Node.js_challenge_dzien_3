const crypto = require('crypto');

const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';
const password = "PysęjkkyDw";


console.log(decodeText(ENCRYPTED_TEXT, password));


function decodeText(encodedText, password){
    const decipher = crypto.createDecipher('aes-256-ecb', password);
    /*
        Takie pytanie:
        Czemu w przypadku innych algorytmów pojawiał się błąd?
        Myślałem, że pojawi się jakiś tekst. Natomiast ponieważ odszyfrowany jest złym algorytmem, to zwróci tekst bez sensu.
        Chodzi o jakieś sumy kontrolne dla różnych algorytmów?
     */

    let decrypted = decipher.update(encodedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


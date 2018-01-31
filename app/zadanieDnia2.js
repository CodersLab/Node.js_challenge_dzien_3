const crypto = require('crypto');

const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';

const tabAlgorithms = ['aes192', 'aes-256-ecb', 'aes-256-cbc', ];

const decodeText = (encodedText, password, tabAlgorithms) => {
	tabAlgorithms.forEach(x => {
		const decipher = crypto.createDecipher(x, password);
		decrypted = decipher.update(encodedText, 'hex', 'utf8');
		try {
			console.log(`Prawidłowy algorytm: ${x}\n${decrypted += decipher.final('utf8')}`);
		} catch(err) {
			console.log(`Nieprawidłowy algorytm: ${x}`)
		}
	})
};

decodeText(ENCRYPTED_TEXT, 'PysęjkkyDw', tabAlgorithms);
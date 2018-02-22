const crypto = require('crypto');

const text = 'Hello World!';
const hash = crypto.createHmac('sha256', text).digest('hex');
console.log(hash);

function encodeText(text, password, algorithm) {
  const cipher = crypto.createCipher(algorithm, password);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

console.log(encodeText('Hello, World!', 'M0j3 has|0!', 'aes-256-cbc'));

function decodeText(encodedText, password, algorithm) {
  const decipher = crypto.createDecipher(algorithm, password);

  let decrypted = decipher.update(encodedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

console.log(decodeText('352c9abb9cd20b41766f352b2611bb7b', 'M0j3 has|0!','aes-256-cbc'));

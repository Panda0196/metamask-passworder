const cryptoAlt = require('crypto').webcrypto
const cryptoKey = require('crypto').webcrypto.CryptoKey

global.crypto = cryptoAlt
global.CryptoKey = cryptoKey

const { strict: assert } = require('assert');
const passworder = require('@metamask/browser-passworder');

const secrets = { coolStuff: 'all', ssn: 'livin large' };
const password = 'hunter55';

passworder
  .encrypt(password, secrets)
  .then(function (blob) {
    console.log("Encrypt: ", blob);
    return passworder.decrypt(password, blob);
  })
  .then(function (result) {
    console.log("Decrypt: ", result);
    assert.deepEqual(result, secrets);
  });
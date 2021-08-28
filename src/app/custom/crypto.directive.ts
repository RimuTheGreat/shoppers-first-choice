import { Directive } from '@angular/core';

import * as CryptoJS from 'crypto-js';

@Directive({
  selector: '[appCrypto]'
})
export class CryptoDirective {

  // Encryption decryption variables

  keySize = 256;
  ivSize = 128
  iterations = 100;

  constructor() { }

  encrypt(msg, pass){
    const salt = CryptoJS.lib.WordArray.reandom(128 / 8);
    const key = CryptoJS.PBKDF2(pass, salt, {
      keySize: this.keySize / 32,
      iterations: this.iterations
    });
    const iv: any = CryptoJS.lib.WordArray.random(128 / 8);
    const encrypted = CryptoJS.AES.encrypt(msg, key, {
      iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });
    // salt, iv will be hex 32 in length
    // append them to the ciphertext for use in decryption

    return (salt.toString() + iv.toString() + encrypted.toString());
  }

  decrypt(transitmessage, pass){
    const salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
    const iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32));
    const encrypted = transitmessage.substring(64);
    const key =  CryptoJS.PBKDF2(pass, salt, {
      keysize: this.keySize / 32,
      iterations: this.iterations
    });

    return CryptoJS.AES.decrypt(encrypted, key, {
      iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });
  }

}

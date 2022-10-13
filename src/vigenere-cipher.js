const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reversing = true) {
    this.reversing = reversing;
  }
  encrypt(textToEncrypt, stringEncryption) {
    if (textToEncrypt === undefined || stringEncryption === undefined) {
      throw new Error("Incorrect arguments!");
    } else {
      if (!this.reversing) {
        textToEncrypt = textToEncrypt.split("").reverse().join("");
      }
      textToEncrypt = textToEncrypt.toUpperCase();
      stringEncryption = stringEncryption.toUpperCase();
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";
      for (let i = 0, j = 0; i < textToEncrypt.length; i++) {
        if (letters.includes(textToEncrypt[i])) {
          result += String.fromCharCode(
            ((textToEncrypt[i].charCodeAt(0) + stringEncryption.charCodeAt(j) - 2 * 65) % 26) + 65
          );
        } else {
          result += textToEncrypt[i];
          continue;
        }
        j = ++j % stringEncryption.length;
      }
      return result;
    }
  }
  decrypt(textToDecrypt, stringDecryption) {
    if (textToDecrypt === undefined || stringDecryption === undefined) {
      throw new Error("Incorrect arguments!");
    } else {
      if (!this.reversing) {
        textToDecrypt = textToDecrypt.split("").reverse().join("");
      }
      textToDecrypt = textToDecrypt.toUpperCase();
      stringDecryption = stringDecryption.toUpperCase();
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";
      for (let i = 0, j = 0; i < textToDecrypt.length; i++) {
        if (letters.includes(textToDecrypt[i])) {
          result += String.fromCharCode(
            90 - ((25 - (textToDecrypt[i].charCodeAt(0) - stringDecryption.charCodeAt(j))) % 26)
          );
        } else {
          result += textToDecrypt[i];
          continue;
        }
        j = ++j % stringDecryption.length;
      }
      return result;
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};

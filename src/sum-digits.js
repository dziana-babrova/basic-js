const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  while (String(n).length > 1) {
    let stringN = String(n);
    let arrayN = stringN.split("");
    arrayN.forEach((el, i) => {arrayN[i] = Number(el)});
    n = arrayN.reduce((el, acc) => {
      return Number(el) + acc;
    });
  }
  return (n);
}

module.exports = {
  getSumOfDigits
};
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nArray = [];
  let nString = String(n);
  for (let i = 0; i < nString.length; i++) {
    let newString = nString;
    newString = newString.split("")
    newString.splice(i, 1);
    newString = newString.join("");
    nArray.push(Number(newString));
  }
  nArray.sort((a, b) => b - a);
  return nArray[0];
}

module.exports = {
  deleteDigit
};
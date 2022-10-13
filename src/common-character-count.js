const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let sortedS1 = s1.split("").sort();
  let sortedS2 = s2.split("").sort();
  for (let i = 0; i < sortedS1.length; i++) {
    if (sortedS2.includes(sortedS1[i])) {
      sortedS2.splice(sortedS2.indexOf(sortedS1[i]), 1);
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
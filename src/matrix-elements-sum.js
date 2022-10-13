const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newMatrix = [];
  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    let smallMatrix = [];
    for (let j = 0; j < matrix.length; j++) {
      smallMatrix.push(matrix[j][i]);
    }
    newMatrix.push(smallMatrix);
    smallMatrix = [];
  }
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (newMatrix[i][j] !== 0) {
        sum += newMatrix[i][j];
      } else {
        break;
      }
    }
  }
  return (sum);
}

module.exports = {
  getMatrixElementsSum
};
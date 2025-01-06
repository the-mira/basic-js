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
  let sum = 0;
  let zeroMatrix = matrix.map(row => [...row]);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        for (let temp = i + 1; temp < matrix.length; temp++) {
          zeroMatrix[temp][j] = 0;
        }
      }
    }
  }

  for (let i = 0; i < zeroMatrix.length; i++) {
    for (let j = 0; j < zeroMatrix[i].length; j++) {
      sum += zeroMatrix[i][j];
    }
  }

  return sum;
}


module.exports = {
  getMatrixElementsSum
};

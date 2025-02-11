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
  const numsArray = n.toString().split("").map(elem => +elem);
  
  let maxNumber = 0;

  numsArray.forEach((_, index) => {
    const temp = +numsArray.filter((val, i) => i !== index).join('');
    maxNumber = Math.max(maxNumber, temp);
  })

  return maxNumber;
}

module.exports = {
  deleteDigit
};

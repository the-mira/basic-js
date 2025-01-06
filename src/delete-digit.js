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
  const minDigitIndex = numsArray.indexOf(Math.min(...numsArray));
  return +numsArray.filter((elem, index) => index !== minDigitIndex).join('');
}

module.exports = {
  deleteDigit
};

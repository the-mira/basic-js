const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const resultArr = []

  for(let i = 0; i < arr.length; i += 1){
    switch(arr[i]){
      case "--double-next":
        if(arr[i + 1]){
          resultArr.push(arr[i + 1]);
        }
        
        break;
      case "--discard-prev":
        if(arr[i - 1] && arr[i - 2] !== '--discard-next'){
          resultArr.pop();
        }
        break;
      case "--discard-next":
        i += 1;
        break;
      case "--double-prev":
        if(arr[i - 1] && arr[i - 2] !== '--discard-next'){
          resultArr.push(arr[i - 1]);
        }
        break;  
      default:
        resultArr.push(arr[i])
        break;
    }
  }

  return resultArr;
}

module.exports = {
  transform
};

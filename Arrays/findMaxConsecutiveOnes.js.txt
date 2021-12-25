/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let oneCount = 0;
    let maxCount = 0;
  nums.forEach(item => {
    if(item === 1){
      oneCount++;
    } else {
      maxCount = Math.max(maxCount, oneCount);
      oneCount = 0;
    }
  })
  return Math.max(maxCount, oneCount);
};
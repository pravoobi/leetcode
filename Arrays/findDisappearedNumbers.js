/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const numSet = new Set(nums);
    let missingNums = [];
    nums.forEach((_, i) => {
      if(!numSet.has(i+1)){
        missingNums.push(i+1);
      }
    });
    return missingNums;
  };

  /*
  Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space
  */
 //best speed solution
 var findDisappearedNumbers = function(nums) {
    for(var i = 0; i < nums.length; i++){
        var curr = Math.abs(nums[i]);
        nums[curr-1] = -(Math.abs(nums[curr-1]));
      console.log(i, nums[i], curr, nums);
    }
    
    var result = [];
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            result.push(i+1);
        }
    }
    
    return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));//[5,6]
//Another solution 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let result = [];
    let dup = new Array(nums.length + 1);
    dup[0] = 0;
    
    for(let i = 1; i <= nums.length; ++i){
        dup[i] = i;
    }
    
    for(let i = 0; i < nums.length; ++i){
        dup[nums[i]] = 0;
    }
    
    for(let i = 0; i < dup.length; ++i){
        if(dup[i] !== 0){
            result.push(dup[i])
        }
    }
    return result;
};
//
var findDisappearedNumbers = function(n) {
    
    // [4,3,2,7,8,2,3,1];
    // [-4,-3,-2,-7,8,2,-3,-1];
    
    for(let i=0;i<n.length;i++){
            n[Math.abs(n[i])-1]=-1*Math.abs(n[Math.abs(n[i])-1])
    }
    const res=[]
    for(let i=0;i<n.length;i++){
        if(n[i]>0){
            res.push(i+1)
        }
    }
    return res
};
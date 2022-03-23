/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let slow = 0;
    let fast = 0;
    nums.forEach((n, index) => {
      if(n !== 0){
        nums[slow] = n;
        slow++;
        fast++;
      } else {
        fast++;
      }
    });
  nums.splice(slow, fast-slow, ...Array(fast-slow).fill(0));
  return nums;
};

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/
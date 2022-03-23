/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let squared = []
    squared = nums.map(num => num*num);
    return squared.sort((a,b) => a-b);
};
//Better solution O(n)
var sortedSquares = function(nums) {
    // use two pointers
    // create a new array
    const result = new Array(nums.length);
    let left = 0, 
        right = nums.length - 1;
    
	// don't want to rearrange the array, so iterating the array in descending order 
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[i] = nums[right] ** 2
            right--;
        } else {
            result[i] = nums[left] ** 2
            left++;
        }
    }
    
    return result;
};

/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
*/
//best space
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let answer = [];
    let idx = right;
    
    
    while(left <= right) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            answer[idx--] = nums[left] * nums[left];
            left++;
        } else {
            answer[idx--] = nums[right] * nums[right];
            right--;
        }
    }
    
    return answer;
};
//best fast
var sortedSquares = function(nums) {
    let i=0;
    let j=nums.length-1;
    let k=j;
    let result = [];
    while (i<=j) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            result[k--] = nums[i] * nums[i];
            i++;
        } else {
            result[k--] = nums[j] * nums[j];
            j--;
        }
    }
    return result;
};

var threeSum = function(nums) {
  nums.sort((a,b) => a-b);
  const length = nums.length;
 
  let resultArray = [];
  for( let i = 0; i < length; i++ ){
    let left = i+1;
    let right = length - 1;
    if(i > 0 && nums[i] === nums[i-1]) continue;
    while(left < right){
       let sum = nums[i]+nums[left]+nums[right]
       if(sum === 0 && i !== left && left !== right && right !== i) {
         console.log(i, left, right, [nums[i], nums[left], nums[right]]);
          resultArray.push([nums[i], nums[left], nums[right]]); 
          left++;
         while(nums[left] === nums[left-1] && left < right) left++;
      } else if (sum < 0){
          left++;
      } else if (sum > 0){
          right--;
      }
    }
  }
  return resultArray;
}
  
console.log(threeSum([-1,0,1,2,-1,-4]))

/*
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/
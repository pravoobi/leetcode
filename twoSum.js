var twoSum = function(nums, target) {
    const numMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if ((target - num) in numMap) {
            return [numMap[(target - num)], i]
        }
        numMap[num] = i;
    } 
}
console.log(twoSum([2,7,11,15],9))
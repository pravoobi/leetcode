var threeSumClosest = function(nums, target) {
  let min = Infinity;
  nums.sort((a,b)=> a-b);
  for(let i = 0; i < nums.length; i++){
    let left = i+1;
    let right = nums.length - 1;
    let sum = 0;
  
    while(left < right){
      sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(sum - target);
      const closestDiff = Math.abs(target - min);
     
      if(diff < closestDiff){
        min = sum;
      }
      if(sum > target){
        right--; 
      } else {
        left++;
      }
    }
    
  }
  return min;
    
};
  
console.log(threeSumClosest([-1,2,1,-4], 1)); //2
console.log(threeSumClosest([0,0,0], 1)); //0
console.log(threeSumClosest([1,1,-1,-1,3], -1)); //-1

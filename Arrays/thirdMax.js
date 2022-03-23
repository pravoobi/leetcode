var thirdMax = function(nums) {
    const copySet = new Set(nums);
    const copyArray = [...copySet].sort((a,b)=> b-a);
    if(copyArray.length === 1) return copyArray[0];
    if(copyArray.length === 2) return Math.max(copyArray[0], copyArray[1]);
    return copyArray[2];
  };

  // console.log(thirdMax([1,2]));//2
console.log(thirdMax([2,2,3,1]));//1

//Best solution
var thirdMax = function(nums) {
    if(nums.length<3) return Math.max(...nums);
    let u = new Set(nums)
    if(u.size<3) return Math.max(...u);
    
    for(let i=0;i<2;i++){
        u.delete(Math.max(...u))
    }
    
    return Math.max(...u);
};
//another solution
var thirdMax = function(nums) {
    nums = Array.from(new Set(nums));
    var len = nums.length;
    if(len<=2){
    	return Math.max(...nums);
    }
    if(len===3){
    	return Math.min(...nums);
    }
    nums = nums.sort((a,b)=>{return b-a;})
    return nums[2];
};

//clean soution
var thirdMax = function(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
      if (nums[i] > first) {
        [first, second, third] = [nums[i], first, second];
      } else if (nums[i] > second) {
        [second, third] = [nums[i], second];
      } else if (nums[i] > third) {
        third = nums[i];
      }
    }
    return third === -Infinity ? first : third;
  };
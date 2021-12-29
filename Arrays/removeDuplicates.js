//Two pointers used
var removeDuplicates = function(nums) {
    let unique;
    let slow= 0, fast=0;
    nums.forEach((n, i) => {
      fast = i;
      if(unique === undefined) {
        unique = n;
        slow++;
      }
      if(unique !== n){
        nums[slow] = n;
        slow++;
        unique = n;
      }
    })
    
    return slow;
  }
  
  console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));//[0,1,2,3,4,_,_,_,_,_]]
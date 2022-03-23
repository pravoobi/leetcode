var sortArrayByParity = function(nums) {
    let slow = 0;
    let fast = 0;
    let length = nums.length;
    
    for(let i = 0; i < length; i++){
      if(nums[i]%2 === 0){
        nums[slow] = nums[i];
        slow++;
        fast++;
      } else {
        nums.push(nums[i]);
        fast++;
      }
    }
    nums.splice(slow, fast-slow);
    return nums;
    // let slow = 0;
    //   let fast = 0;
    //   nums.forEach((n, index) => {
    //     if(nums[index]%2 === 0){
    //     nums[slow] = nums[index];
    //       slow++;
    //       fast++;
    //     } else {
    //       nums.push(nums[index]);
    //       fast++;
    //     }
    //   });
    // nums.splice(slow, fast-slow);
    // return nums;
      
  };
  
  console.log(sortArrayByParity([3,1,2,4]));//[2,4,3,1]

  /*
  Approach 3: In-Place
Intuition

If we want to do the sort in-place, we can use quicksort, a standard textbook algorithm.

Algorithm

We'll maintain two pointers i and j. The loop invariant is everything below i has parity 0 (ie. A[k] % 2 == 0 when k < i), and everything above j has parity 1.

Then, there are 4 cases for (A[i] % 2, A[j] % 2):

If it is (0, 1), then everything is correct: i++ and j--.

If it is (1, 0), we swap them so they are correct, then continue.

If it is (0, 0), only the i place is correct, so we i++ and continue.

If it is (1, 1), only the j place is correct, so we j-- and continue.

Throughout all 4 cases, the loop invariant is maintained, and j-i is getting smaller. So eventually we will be done with the array sorted as desired.
Complexity Analysis

Time Complexity: O(N)O(N), where NN is the length of A. Each step of the while loop makes j-i decrease by at least one. (Note that while quicksort is O(N \log N)O(NlogN) normally, this is O(N)O(N) because we only need one pass to sort the elements.)

Space Complexity: O(1)O(1) in additional space complexity.
*/
var sortArrayByParity = function(nums) {
    let i = 0;
    let j = nums.length-1;
    while(i < j){
      if(nums[i]%2 > nums[j]%2){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
      if(nums[i]%2 === 0) i++;
      if(nums[j]%2 === 1) j--;
    }
    
    return nums;
  };
  
  console.log(sortArrayByParity([3,1,2,4]));//[2,4,3,1]

/*
Approach 2: Two Pass
Intuition and Algorithm

Write all the even elements first, then write all the odd elements.
Complexity Analysis

Time Complexity: O(N)O(N), where NN is the length of A.

Space Complexity: O(N)O(N), the space used by the answer.
*/
var sortArrayByParity = function(nums) {  
    let tempArray = []; 
    nums.forEach(item =>{
      if(item%2 === 0) tempArray.push(item);
    });
    nums.forEach(item =>{
      if(item%2 === 1) tempArray.push(item);
    });
   
    return tempArray;
};
  
console.log(sortArrayByParity([3,1,2,4]));//[2,4,3,1]

/*
Approach 1: Sort
Intuition and Algorithm

Use a custom comparator when sorting, to sort by parity.

Complexity Analysis

Time Complexity: O(N \log N)O(NlogN), where NN is the length of A.

Space Complexity: O(N)O(N) for the sort, depending on the built-in implementation of sort.
*/

var sortArrayByParity = function(nums) {  
    nums.sort((a,b)=> a%2-b%2);
    return nums;
  };
  
  console.log(sortArrayByParity([3,1,2,4]));//[2,4,3,1]
  
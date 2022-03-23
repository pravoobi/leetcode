//Max Consecutive Ones II
var maxConsecutiveOnes = function(arr) {
    let oneSums = [];
  let interSum = 0;
  arr.forEach(item => {
    if(item === 0){
      oneSums.push(interSum);
      interSum = 0;
    }
    interSum += item;
  });
  let maxSubSum = 0;
  let i = 1;
  while( i < oneSums.length){
    maxSubSum = Math.max((oneSums[i-1]+oneSums[i]), maxSubSum);
    i++;
  }
  return maxSubSum+1;
};

console.log(maxConsecutiveOnes([1,0,1,1,0]));//4

//Best alternative solution
var maxConsecutiveOnes = function(arr) {
    let count = 0;
    let current = 0;
    let result = 0;
    for(let i = 0; i < arr.length; i++){
      count++;
      if(arr[i] === 0){
        current = count;
        count = 0;
      }
      result = Math.max(result, current+count);
    }
    return result;
  };
  
  console.log(maxConsecutiveOnes([1,0,1,1,0]));//4
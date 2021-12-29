var validMountainArray = function(arr) {
    let peak;
    let strictlyIncreasing = false;
    let strictlyDecreasing = false;
    let peakNumber = 0;
    for(let i = 0; i< arr.length; i++){
      if(peak === undefined) {
        peak = arr[i];
        continue;
      }
      
      if(i > 0 && arr[i-1] === arr[i]){
        return false;
      }
      if(peak < arr[i]){
        peak = arr[i];
        strictlyIncreasing = true;
        if(peakNumber === 0 || strictlyDecreasing){
          peakNumber++;
        }
      } else {
        strictlyDecreasing = true;
        if(i > 0 && arr[i-1] <= arr[i] ){
          peakNumber++;
        }
      }
    }
  return strictlyIncreasing && strictlyDecreasing && peakNumber === 1;
};

console.log(validMountainArray([0,3,2,1]));//true
console.log(validMountainArray([1,2]));//false
console.log(validMountainArray([3,5,5]));//false
console.log(validMountainArray([0,2,3,4,5,1,0]));//true
console.log(validMountainArray([0,2,3,3,5,1,0]));//false
console.log(validMountainArray([0,1,2,1,2]));//false
console.log(validMountainArray([1,7,9,5,4,1,2]));//false

//Another solution

var validMountainArray = function(A) {
    let n = A.length;
    if(n <= 2) return false;
    if(A[0] >= A[1] || A[n - 2] <= A[n - 1]) return false;
    let up = true;
    for(let i = 1; i < n; i++){
        if(up){
            if(A[i] < A[i - 1]) up = false;
            else if(A[i] === A[i - 1]) return false;
        }else{
            if(A[i] >= A[i - 1]) return false;
        }
    }
    return true;
};
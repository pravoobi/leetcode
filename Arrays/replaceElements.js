var replaceElements = function(arr) {
    if(arr.length === 1) return [-1];
    if(arr.length === 2) return [arr[0], -1];
    let greatestElement = Math.max(arr[arr.length-1], arr[arr.length-2]);
    arr[arr.length-2] = arr[arr.length-1];
    arr[arr.length-1] = -1;
    for(let i = arr.length - 3; i >= 0; i--){
      if(arr[i] < greatestElement){
        arr[i] = greatestElement;
      } else {
        let temp = greatestElement;
        greatestElement = arr[i];
        arr[i] = temp;
        
      }
    }
    return arr;
  };

//   input: [17,18,5,4,6,1]
//   output: [18,6,6,6,1,-1]
//Better solutions
/**
 * @param {number[]} arr
 * @return {number[]}
 */
 const replaceElements = arr => {
    let lastMax = -1
    for (let i = arr.length - 1; i >= 0; i--) {
        const val = arr[i]
        if (!arr[i + 1]) {
            arr[i] = lastMax 
            lastMax = val
        } else {
            arr[i] = lastMax
            lastMax = Math.max(lastMax, val)
        }
    }
    return arr
};
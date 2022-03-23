var heightChecker = function(heights) {
    let copyHeights = [...heights];
    copyHeights.sort((a,b)=> a-b);
    let numberOfIndices = 0;
    heights.forEach((num, i)=>{
      if(num !== copyHeights[i]){
        numberOfIndices++;
      }
    })
    return numberOfIndices;
  };

/*
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
*/
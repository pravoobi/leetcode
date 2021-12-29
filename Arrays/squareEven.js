var squareEven = function(arr) {
    arr.forEach((n, i) =>{
      if(i%2 === 0){
        arr[i]=n**2;
      }
    })
  return arr;
};

console.log(squareEven([9, -2, -9, 11, 56, -12, -3]));//[81, -2, 81, 11, 3136, -12, 9]